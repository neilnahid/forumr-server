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
        genSaltSync(parseInt(process.env.SALT_ROUNDS!, 10)),
      );
      await user.save();
      return user;
    },
  },
};
