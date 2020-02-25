import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from 'axios';
import UserContext from "./UserContext";

const Provider: React.FC = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickname, setNickname] = useState("");
    const [userId, setId] = useState("");
    const history = useHistory();

    useEffect(() => {
        const id = parseURL(history.location.pathname);
        axios.get(`http://localhost:8000/user/${id}`,)
            .then(res => {
                console.log('user fetch data: ' + res.data);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setNickname(res.data.nickname);
                setId(res.data.id);

            });
    });

    return(
        <UserContext.Provider value={{firstName, lastName, nickname, userId}}>
            {props.children}
        </UserContext.Provider>
    )


};

const parseURL = (url: string) => {
    const sURL = url.split('/');
    return sURL[sURL.length - 1];
};

export default Provider;