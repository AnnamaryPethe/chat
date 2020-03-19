import * as mongoose from "mongoose";


export interface UserType extends mongoose.Document {
    firstName: string,
    lastName: string,
    nickname: string,
    email: string,
    password: string,
    message?: string,
    success?: boolean
}

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickname: String,
    email: String,
    password: String
}, {
    timestamps: true
    }
);

export default mongoose.model<UserType>('user', userSchema);

