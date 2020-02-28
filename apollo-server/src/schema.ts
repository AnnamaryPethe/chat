import {gql} from "apollo-server";
import {DocumentNode} from "graphql";

export const typeDefs: DocumentNode = gql`
  
    type User {
        id: ID!
        firstName: String
        lastName: String
        nickname: String
        email: String
        password: String
    }
    
    type Query {
        users: [User!]!
    }
    
    input CreateUserInput {
        firstName: String
        lastName: String
        nickname: String
        email: String
        password: String
    }
    
    type Mutation {
        createUser(data: CreateUserInput): User
    }
   
`;