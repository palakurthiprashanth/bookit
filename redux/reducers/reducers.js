import { combineReducers } from "redux";
import { 
    allRoomsReducer,
    roomDetailsReducer,
     
    newReviewReducer,
    checkReviewReducer,
     
    newRoomReducer,
    roomReducer,
     
    roomReviewsReducer,
    reviewReducer
} from "./roomReducers";
 
import { 
    authReducer, 
    userReducer, 
    forgotPasswordReducer, 
    loadedUserReducer,
    allUsersReducer,
    userDetailsReducer
} from "./userReducers";

import { 
    checkBookingReducer, 
    bookedDatesReducer, 
    bookingsReducer, 
    bookingDetailsReducer,
    bookingReducer
} from "./bookingReducers";
 
const reducers= combineReducers({
    allRooms: allRoomsReducer,
    newRoom: newRoomReducer,
    room: roomReducer,
    roomDetails: roomDetailsReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    loadedUser: loadedUserReducer,
    forgotPassword: forgotPasswordReducer,
    checkBooking: checkBookingReducer,
    bookedDates: bookedDatesReducer,
    bookings: bookingsReducer,
    booking: bookingReducer,
    bookingDetails: bookingDetailsReducer,
    newReview: newReviewReducer,
    checkReview: checkReviewReducer,
    roomReviews: roomReviewsReducer,
    review: reviewReducer
});
 
export default reducers;