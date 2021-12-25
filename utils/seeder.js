const Room = require('../models/room');
const mongoose = require('mongoose');
const rooms = require('../data/rooms')

const dbConnect = () => {
    mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.xm1gc.mongodb.net/book-it?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    var dbconnect = mongoose.connection;
  
    dbconnect.on('error', () => {
      console.log(`Mongo DB Connection Failed`);
    });
  
    dbconnect.on('connected', () => {
      console.log(`Mongo DB Connection Successfull`);
    });
  };
dbConnect();
const seedRooms = async () => {
    try {

        await Room.deleteMany();
        console.log('Rooms are deleted');

        await Room.insertMany(rooms);
        console.log('All Rooms are added.');

        process.exit()


    } catch (error) {
        console.log(error.message);
        process.exit()
    }
}

seedRooms()