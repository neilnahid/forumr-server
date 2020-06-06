import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
  profile: {
    type: Types.ObjectId,
    ref: 'Profile',
  },
  token: String,
});

export const User = model('User', UserSchema);
