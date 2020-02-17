export type UserState  = {
    firstName: string;
    lastName: string;
    nickname: string;
    email: string;
    password: string;
}

export type Action =
    | { type : 'firstName', payload: string }
    | { type: 'lastName', payload: string}
    | { type: 'nickname', payload: string}
    | { type: 'email', payload: string}
    | { type: 'password', payload: string}

export const initialState: UserState = {
    firstName: '',
    lastName: '',
    nickname: '',
    email: '',
    password: '',
};

export const reducer = (state: UserState, action: Action): UserState => {
    switch (action.type) {
        case 'firstName':
            return {...state, firstName: action.payload};
        case 'lastName':
            return {...state, lastName: action.payload};
        case 'nickname':
            return {...state, nickname: action.payload};
        case 'email':
            return {...state, email: action.payload};
        case 'password':
            return {...state, password: action.payload};
        default:
            return state;
    }
};

