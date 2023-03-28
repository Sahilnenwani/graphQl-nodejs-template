import { gql } from "apollo-server-express";

export const UserSchemaGraphQl = gql`
  type User {
    id: ID!
    name: String!
    address:String
    age:Int
    dateOfBirth:String
    createdAt:String!
    deleted:String
  }

  type Query {
    getUsers: [User!]
    getUserById(id: ID!): User
    helloUser:String
  }

  input UserInput {
    name: String!
    address:String
    age:Int
    dateOfBirth:String
    deleted:String
  }

  type Mutation {
    createUser(userData: UserInput!): User!
    updateUser(id:ID!,userData: UserInput!): User!
    deleteUserById(id: ID!): String!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;