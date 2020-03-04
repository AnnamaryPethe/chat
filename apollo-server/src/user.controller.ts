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

export const createNewUser = async (
    {firstName, lastName, nickname, email, password}: CreateUserInput): Promise<LoginPromise | Error > => {
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
                            message: "User has been created.",
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
    return UserModel.findById(id)
        .then((data: UserType) => data)
        .catch((err: Error) => { throw err})
};

export interface LoginUserByEmail {
    email: string
    password: string
    id?: string
}

interface LoginPromise {
    id?: string
    success: boolean
}

export const loginUserByEmail = async ({email, password}: LoginUserByEmail): Promise<LoginPromise | Error> => {
    return new Promise(async (resolve, reject) => {

        UserModel.findOne({email}, (err, user: LoginUserByEmail) => {
        if (err) {
            return reject(err);
        }
        if (!user) {
            return reject({message: 'no user with this email'});
        }

        bcrypt.compare(password, user.password, ((err1, same) => {
            if (err1) {
                return reject(err1);
            }

            return resolve({success: same, id: user.id});

        }));
    });
});

};