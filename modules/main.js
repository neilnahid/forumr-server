import { GraphQLModule } from '@graphql-modules/core';
import { UserModule } from './user/user';
import { ProfileModule } from './profile/profle';
import { AuthModule } from './authentication/auth';

export default new GraphQLModule({
  imports: [UserModule, ProfileModule, AuthModule],
});
