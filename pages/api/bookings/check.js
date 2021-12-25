import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect'

import { checkRoomBookingAvailability } from '../../../controllers/bookingController';

import onError from '../../../middlewares/error';

const handler = nc({ onError });

dbConnect();

handler.get(checkRoomBookingAvailability);

export default handler;