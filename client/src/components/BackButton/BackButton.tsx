import React from "react";
import {useHistory} from "react-router-dom";

export const BackButton: React.FC = () => {
    const history = useHistory();

    const goBackHandler = () => {
        history.push('/');
    };

    return(
        <div>
           <p>If you are sure, click button to log out!</p>
            <button onClick={goBackHandler}> Log out</button>
        </div>
    )
};