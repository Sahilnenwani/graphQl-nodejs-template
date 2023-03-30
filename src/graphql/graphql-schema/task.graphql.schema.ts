import { gql } from "apollo-server-express";

export const TaskSchemaGraphQl = gql`
enum TaskStatusEnum{
    INPROGRESS
    DONE
    BACKLOG
}

type Task {
    id: ID!
    title: String!
    description:String
    status:TaskStatusEnum!
    userId:User
    deadline:String
    createdAt:String!
    deleted:String
  }

  type Query {
    getTasks: [Task!]
    getTaskById(id: ID!): Task 
    hello:String
  }

  input TaskInput {
    title: String!
    description:String
    status:TaskStatusEnum
    deadline:String
    userId:ID!
  }

  input TaskUpdate {
    id:ID!
    title: String
    description:String
    status:TaskStatusEnum
    deadline:String
    deleted:String
    userId:ID
  }


  type Mutation {
    createTask(task: TaskInput!): Task!
    updateTask(id:ID!,task: TaskUpdate!): Task!
    deleteTaskById(id: ID!): String!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;