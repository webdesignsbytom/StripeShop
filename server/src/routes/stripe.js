import { Router } from 'express';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';
import { createCheckoutSessionHandler, getAllProductsHandler } from '../controllers/stripe.js';

const router = Router();

router.post('/create-checkout-session', createCheckoutSessionHandler);
router.get('/get-products', getAllProductsHandler);

export default router;
