import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import UserContext, {User} from "./UserContext";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";


interface UserId {
    id: string
}

const GET_USER_ID = gql`
    query user($id: ID) {
        user(id: $id) {
            id
            firstName
            lastName
            nickname
      }  
}
`;

const Provider: React.FC = (props) => {

    const history = useHistory();
    const id = parseURL(history.location.pathname);
    const {data} = useQuery<User, UserId>(GET_USER_ID, {variables: {id: id}}) as Partial<User>;
    console.log(data);


    return(
        <UserContext.Provider value={{data}}>
            {props.children}
        </UserContext.Provider>
    )


};

const parseURL = (url: string) => {
    const sURL = url.split('/');
    return sURL[sURL.length - 1];
};

export default Provider;