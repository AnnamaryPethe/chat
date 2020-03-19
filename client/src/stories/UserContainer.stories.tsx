import React from "react";
import UsersContainer from "../components/Users_container/Users_container";

export default {
    title: 'User container',
    component: UsersContainer
}

const users = [
    "name", "name2", "nameeee"
];

export const userContainer = () => <UsersContainer users={users}/>;