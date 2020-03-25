import React from "react";
import {useHistory} from "react-router-dom";
import {ButtonDiv} from "./Logout.style";
import { withRouter } from 'react-router-dom'

export const Logout = withRouter(({ history }) => (

        <ButtonDiv>
           <p>If you are sure, click button to log out!</p>
            <button type='button'
                    onClick={() => { history.push('/')}}> Log out </button>
        </ButtonDiv>
    )
);