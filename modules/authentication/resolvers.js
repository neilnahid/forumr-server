import { User } from '../../models/models';
import jwt from "jsonwebtoken";

const getToken = ({ email }) => {
  return jwt.sign(email, process.env.JWT_SECRET);
}


export default {
  Query: {
    authenticate: async (parent, { email, password }, context, info) => {
      const user = await User.find({
        email: email,
        password: password
      }).findOne();
      if (!user)
        throw Error("invalid credentials");
      user.token = getToken(user);
      user.save();
      return user;
    }
  }
};
