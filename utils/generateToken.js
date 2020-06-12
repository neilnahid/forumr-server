import jwt from 'jsonwebtoken';

export const createAccessToken = ({ id, email }) => jwt.sign(
  { id, email },
  process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '15m',
  },
);
export const createRefreshToken = ({ id, email }) => jwt.sign(
  { id, email },
  process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7 days',
  },
);
