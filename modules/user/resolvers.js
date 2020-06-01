import { User, Profile } from '../../models/models';
export default {
  Query: {
    users: async (root, args, info) => {
      return await User.find();
    },
  },
  Mutation: {
    addUser: async (root, args, info) => {
      return await new User(args).save();
    },
  },
};
