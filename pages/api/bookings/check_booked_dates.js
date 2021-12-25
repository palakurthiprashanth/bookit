import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect'

import { checkBookedDatesOfRoom } from '../../../controllers/bookingController';

import onError from '../../../middlewares/error';

const handler = nc({ onError });

dbConnect();

handler.get(checkBookedDatesOfRoom);

export default handler;