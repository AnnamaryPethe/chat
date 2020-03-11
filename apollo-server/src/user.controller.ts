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
    {firstName, lastName, nickname, email, password}: CreateUserInput)=> {
    console.log("first name: " + firstName);
    const isExist = await UserModel.findOne({email});
    if (!isExist) {
        password = await bcrypt.hash(password, SALT_AROUND);
        await UserModel.create({
            firstName, lastName, nickname, email, password
        });
        return {
            message: "User has been created.",
            success: true
        };
    }
    else
        {
            return {message: 'This email address is already exist. Please try it again.',
                    success: false};
        }
    }
    ;

    export interface GetAllUsersInput {
        limit?: number
    }

    export const getAllUsers = ({limit}: GetAllUsersInput) => {
        return UserModel.find({})
            .limit(limit ? limit : 0)
            .then((data: UserType[]) => data)
            .catch((err: Error) => {
                throw err
            })
    };

    export const getUserById = ({id}) => {
        return UserModel.findById(id)
            .then((data: UserType) => data)
            .catch((err: Error) => {
                throw err
            })
    };

    export interface LoginUserByEmail {
        email: string
        password: string
        id?: string
    }


    export const loginUserByEmail = async ({email, password}: LoginUserByEmail) => {
        const user = await UserModel.findOne({email});
        if (!user) {
            return {message: 'no user with this email'};
        }
        const same = await bcrypt.compare(password, user.password);
        return {success: same, id: user.id};

    };