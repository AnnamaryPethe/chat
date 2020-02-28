import {GetAllUsersInput, getAllUsers, CreateUserInput, createNewUser} from './user.controller'

export const resolvers = {

        Query: {
            users: (_: null, {data}: { data: GetAllUsersInput }) =>
                getAllUsers({...data}),
        },
        Mutation: {
            createUser: (_: null, {data}: { data: CreateUserInput }) =>
                createNewUser({...data})

        },

};

