import { Document } from 'mongoose';

export interface Login extends Document{
    readonly email: string;
    readonly password: string;
    readonly id?: string;
}