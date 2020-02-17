import { Document } from 'mongoose';

export interface Login_user {
    readonly success: boolean;
    readonly id?: string
}