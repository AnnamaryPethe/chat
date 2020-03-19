import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickname: String,
    email: String,
    password: String,
    created: {type: Date, default: Date.now}
});
