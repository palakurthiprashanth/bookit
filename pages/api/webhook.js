import nc from 'next-connect';
import dbConnect from '../../config/dbConnect';

import { webhookCheckout } from '../../controllers/paymentController';

import onError from '../../middlewares/error';

const handler = nc({ onError });

dbConnect();

export const config = {
    api: {
        bodyParser: false,
    }
}
console.log("webhook");
handler.post(webhookCheckout)

export default handler;