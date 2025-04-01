import Stripe from 'stripe';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = 'http://localhost:3000';

export const createCheckoutSessionHandler = async (req, res) => {
  const { priceId } = req.body;
  console.log('priceId', priceId);
  try {
    if (!priceId) {
      console.log('missing price id');
      return sendMessageResponse(res, 400, 'Missing priceId');
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success.html`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    console.log('SUCCESS');
    return sendDataResponse(res, 200, { url: session.url });
  } catch (err) {
    const serverError = new ServerErrorEvent(
      req.user,
      'Create checkout session failed'
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getAllProductsHandler = async (req, res) => {
  const { priceId } = req.body;
  console.log('priceId', priceId);
  try {
    const productsFound = await stripe.products.list({
      limit: 100, // Adjust the limit if needed
    });

    if (!productsFound) {
      const notFound = new NotFoundEvent(
        req.user,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.productListNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    console.log('SUCCESS');
    return sendDataResponse(res, 200, { productList: productsFound });
  } catch (err) {
    const serverError = new ServerErrorEvent(
      req.user,
      'Get product list failed'
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
