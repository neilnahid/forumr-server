import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect('mongodb://localhost:27017/forumr', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.log(error));
  mongoose.connection.on('connected', () => {
    console.log('Successfully connected to database');
  });
};
