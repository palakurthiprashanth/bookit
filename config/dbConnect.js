import mongoose from 'mongoose';

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
export default dbConnect;
