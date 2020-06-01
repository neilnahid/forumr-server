import { GraphQLModule } from '@graphql-modules/core';
import { UserModule } from './user/user';
import { ProfileModule } from './profile/profle';
export default new GraphQLModule({
  imports: [UserModule, ProfileModule],
});
