import { Document } from 'mongoose';

export interface UserGraph extends Document{
    readonly firstName: string;
    readonly lastName: string;
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    // readonly  created: Date;
}