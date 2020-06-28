import {
  Schema, model, Types, Document,
} from 'mongoose';
import { IProfile } from './profile';

export interface IUser extends Document{
  email: string,
  password: string,
  profile: IProfile['_id'],
  token: string
}

const UserSchema = new Schema({
  email: String,
  password: String,
  profile: {
    type: Types.ObjectId,
    ref: 'Profile',
  },
  token: String,
});

export const User = model<IUser>('User', UserSchema);
