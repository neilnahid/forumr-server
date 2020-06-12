import { hash, genSaltSync } from 'bcrypt';
import { User } from '../../models/models';

export default {
  Query: {
    users: async () => User.find(),
  },
  Mutation: {
    addUser: async (root, args) => {
      // TODO: validation
      const user = new User(args);
      user.password = await hash(
        user.password,
        genSaltSync(process.env.SALT_ROUNDS),
      );
      await user.save();
      return user;
    },
  },
};
