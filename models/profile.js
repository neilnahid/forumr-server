import { Schema, model, Types } from 'mongoose';

const ModelSchema = new Schema({
  firstName: String,
  lastName: String,
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

export const Profile = model('Profile', ModelSchema);
