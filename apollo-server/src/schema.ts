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
        user(id: ID): User
    }
    
    input CreateUserInput {
        firstName: String
        lastName: String
        nickname: String
        email: String
        password: String
    }
    
    type Response {
        message: String
        success: Boolean
    }
    
    type Mutation {
        createUser(data: CreateUserInput): Response
        loginUser(data: LoginInput): LoginResponse
    }
    
    input LoginInput {
        email: String
        password: String
    }
    
    type LoginResponse {
        id: ID
        success: Boolean
    }
        
`;