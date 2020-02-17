import React, {createContext} from "react";


export interface User {
    firstName: string;
    lastName: string;
    nickname: string;
}


export const UserContext = createContext<Partial<User>>({});
export default UserContext;