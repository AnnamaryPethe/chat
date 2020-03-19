import React, {createContext} from "react";


export interface User {
    data: UserFields
}

export interface UserFields {
    user: {
        firstName: string;
        lastName: string;
        nickname: string;
        id?: string;
    }
}

export const UserContext = createContext<Partial<User | undefined>>({});
export default UserContext;