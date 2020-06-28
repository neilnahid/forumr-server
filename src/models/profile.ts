import {
  Schema, model, Types, Document,
} from 'mongoose';
import { IUser } from './user';

export interface IProfile extends Document{
  firstName: string,
  lastName: string,
  user: IUser['_id']
}

const ModelSchema = new Schema({
  firstName: String,
  lastName: String,
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
});

export const Profile = model<IProfile>('Profile', ModelSchema);
