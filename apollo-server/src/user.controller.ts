import UserModel, {UserType} from './model';

export interface CreateUserInput {
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string
}

export const createNewUser = (
    {firstName, lastName, nickname, email, password}: CreateUserInput): Promise<UserType | Error > => {
    console.log(firstName);
    return UserModel.create({
            firstName, lastName, nickname, email, password
        })
            .then((data: UserType) => data)
            .catch((err: Error) => {throw err});
};

export interface GetAllUsersInput {
    limit?: number
}

export const getAllUsers = ({limit}: GetAllUsersInput) => {
    return UserModel.find({})
        .limit(limit ? limit : 0)
        .then((data: UserType[]) => data)
        .catch((err: Error) => { throw err})
};