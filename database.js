import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error));
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database');
  });
};
