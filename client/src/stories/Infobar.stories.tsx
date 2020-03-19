import React from "react";
import InfoBar from "../components/InfoBar/InfoBar";
import {MemoryRouter} from "react-router";
import {storiesOf} from "@storybook/react";

const rooms = "room name";

storiesOf('Infobar', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('room name', () => <InfoBar room={rooms}/>);
