import { User, Profile } from '../../models/models';
export default {
  Query: {
    profiles: async (root, args, info) => {
      return await Profile.find();
    },
  },
  User: {
    profile: async (user, args, info) => {
      return await Profile.findById(user.profile);
    },
  },
  Profile: {
    user: async (profile, args, info) => {
      console.log(profile);
      return await User.findById(profile.user);
    },
  },
  Mutation: {
    addProfile: async (root, { firstName, lastName, userId }, info) => {
      const newProfile = new Profile({ firstName, lastName });
      newProfile.user = userId;
      const user = await User.findById(userId);
      user.profile = newProfile.id;
      await user.save();
      return await newProfile.save();
    },
  },
};
