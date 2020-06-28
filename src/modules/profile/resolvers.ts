import { User, Profile } from '../../models/models';
import { IUser } from '../../models/user';
import { IProfile } from '../../models/profile';

export default {
  User: {
    profile:
    (user:IUser) => Profile.findById(user.profile),
  },
  Profile: {
    user:
    (profile: IProfile) => User.findById(profile.user),
  },
  Mutation: {
    addProfile: async (root, { firstName, lastName, userId }) => {
      const newProfile = new Profile({ firstName, lastName });
      newProfile.user = userId;
      const user = await User.findById(userId);
      user!.profile = newProfile.id;
      await user!.save();
      return newProfile.save();
    },
  },
};
