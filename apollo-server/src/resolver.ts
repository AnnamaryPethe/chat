import {
    GetAllUsersInput,
    getAllUsers,
    CreateUserInput,
    createNewUser,
    getUserById, LoginUserByEmail, loginUserByEmail,

} from './user.controller'

export const resolvers = {

        Query: {
            users: (_: null, {data}: { data: GetAllUsersInput }) =>
                getAllUsers({...data}),
            user: (_: null, {id}) =>
                getUserById({id}),
        },
        Mutation: {
            createUser: async (_: null, {data}: { data: CreateUserInput })  =>
                await createNewUser({...data}),
            loginUser: async (_: null, {data}: { data: LoginUserByEmail}) =>
                loginUserByEmail({...data})
        },

};

