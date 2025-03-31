import { Router } from 'express';
import { validateAuthentication, validateDeveloperRole } from '../middleware/auth.js';
import { createCheckoutSessionHandler } from '../controllers/stripe.js';

const router = Router();

router.post('/create-checkout-session', createCheckoutSessionHandler);

export default router;
