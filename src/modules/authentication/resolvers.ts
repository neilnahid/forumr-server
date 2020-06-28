import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Error } from 'mongoose';
import { User } from '../../models/models';
import { createRefreshToken, createAccessToken } from '../../utils/generateToken';

interface DecodedObject{
  id: string,
  email: string
}

export default {
  Query: {
    authenticate: async (parent, { email, password }, { ctx }) => {
      const user = await User.findOne({ email });
      if (user == null) { throw new Error('user does not exist'); }
      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) { throw new Error('invalid password'); }
      const refreshToken = createRefreshToken(user);
      const accessToken = createAccessToken(user);
      user.token = accessToken;
      ctx.cookies.set('refresh_token', refreshToken, {
        httpOnly: true,
      });
      return user.save();
    },
    refreshToken: async (parent, { refreshToken }, { ctx }) => {
      const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as DecodedObject;
      let user = await User.findById(payload.id);

      if (!user) {
        throw new Error('user does not exist');
      }
      const newRefreshToken = createRefreshToken(user);
      const newAccessToken = createAccessToken(user);
      user.token = refreshToken;
      user = await user.save();
      ctx.cookies.set('refresh_token', newRefreshToken, {
        httpOnly: true,
      });
      return {
        refreshToken: newRefreshToken,
        accessToken: newAccessToken,
      };
    },
  },
};
