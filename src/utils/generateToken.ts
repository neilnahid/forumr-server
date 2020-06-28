import jwt from 'jsonwebtoken';
import { IUser } from '../models/user';

export const createAccessToken = ({ id, email }: IUser): string => jwt.sign(
  { id, email },
  process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: '15m',
  },
);
export const createRefreshToken = ({ id, email }: IUser): string => jwt.sign(
  { id, email },
  process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: '7 days',
  },
);
