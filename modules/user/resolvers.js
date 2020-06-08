import { hash } from 'bcrypt';
import { User } from '../../models/models';

export default {
  Query: {
    users: async () => User.find(),
  },
  Mutation: {
    addUser: async (root, args) => {
      // TODO: validation
      const user = new User(args);
      user.password = await hash(user.password, process.env.SALT);
      await user.save();
      return user;
    },
  },
};
