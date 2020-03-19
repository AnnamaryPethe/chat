import React from "react";
import {storiesOf} from "@storybook/react";
import {MemoryRouter} from "react-router";
import Dashboard from "../components/Dashboard/Dashboard";

const data = {
    user: {
        firstName: "firstname",
        lastName: "lastname",
        nickname: "nickname",
        id: "5e3a8291e35a7e0e758ec0bb"
    }
};

storiesOf('Dashboard', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('Dashboard', () => <Dashboard  data={data}/>);
