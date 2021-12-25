import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';

import { getBookingDetails } from '../../../controllers/bookingController';

import { isAuthenticatedUser } from '../../../middlewares/auth';
import onError from '../../../middlewares/error';

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(getBookingDetails)

export default handler;