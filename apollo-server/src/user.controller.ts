import UserModel, {UserType} from './model';
import * as bcrypt from 'bcrypt';

const SALT_AROUND = 12;

export interface CreateUserInput {
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string
}

interface ReturnValue {
    message: string,
    success: boolean
}

export const createNewUser = async (
    {firstName, lastName, nickname, email, password}: CreateUserInput): Promise<ReturnValue | Error > => {
    console.log("first name: " + firstName);
    const isExist = await UserModel.findOne({email});
    if (!isExist) {
        return new Promise(async (resolve, reject) => {
            await bcrypt.hash(password, SALT_AROUND, ((err, encrypted) => {
                if (err) {
                    return reject(err);
                }
                password = encrypted;
                UserModel.create({
                    firstName, lastName, nickname, email, password
                })
                    .then((data) => {
                        resolve( {
                            message: "deksfjligjfdh",
                            success: true,
                        });
                    })
                    .catch((err: Error) => {throw err});
            }));
        })
    }
    else {
        return Promise.reject('This email address is already exist. Please try it again.');
    }
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

export const getUserById = ({id}) => {
    console.log(id);
    return UserModel.findById(id)
        .then((data: UserType) => data)
        .catch((err: Error) => { throw err})
};