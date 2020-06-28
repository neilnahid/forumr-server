import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query {
    profiles: [Profile]
  }
  type Profile {
    id: ID!
    firstName: String!
    lastName: String!
    user: User
  }
  extend type User {
    profile: Profile
  }
  extend type Mutation {
    """
    add a new profile with reference to user
    """
    addProfile(firstName: String, lastName: String, userId: ID!): Profile
  }
`;
