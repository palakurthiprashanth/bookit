import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';

import { stripCheckoutSession } from '../../../controllers/paymentController';
import { isAuthenticatedUser } from '../../../middlewares/auth';

import onError from '../../../middlewares/error';

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(stripCheckoutSession)

export default handler;