import { gql } from 'apollo-server-koa';

export default gql`
  extend type Query{
    authenticate(email: String!, password: String!): User
    refreshToken(refreshToken:String!): RefreshToken
  }
  type RefreshToken{
    refreshToken: String!
  }
`;
