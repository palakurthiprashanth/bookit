import nc from 'next-connect';
import { getAllRooms, newRoom } from '../../../controllers/roomControllers';
import dbConnect from '../../../config/dbConnect';
import onError from "../../../middlewares/error";
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(newRoom);

export default handler;
