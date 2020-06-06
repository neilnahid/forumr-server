import { gql } from 'apollo-server-koa';

export default gql`
  type User {
    id: ID!
    email: String!
    password: String!
    token: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(email: String, password: String): User
  }
`;
