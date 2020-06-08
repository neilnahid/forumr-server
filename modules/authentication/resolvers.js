import jwt from 'jsonwebtoken';
import { User } from '../../models/models';
import { compare } from "bcrypt";

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30min',
  });
}
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: '7d',
  })
}
export default {
  Query: {
    authenticate: async (parent, { email, password }, { ctx }) => {
      const user = await User.find(email);
      if (!user)
        throw new Error("user does not exist");
      if (!compare(password, user.password))
        throw new Error("invalid password");
      return {
        accessToken: generateAccessToken(user),
        refreshToken: generateRefreshToken(user)
      }
    },
  },
};
