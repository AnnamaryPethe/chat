import React from 'react';
import {Nav} from "./navbar";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {BackButton} from "../BackButton/BackButton";


export const Navbar: React.FC = () => {
    const {id} = useParams();

    return (

        <Nav>
            <Router>
                <div>
                    <Link to={`/profile/${id}`}> Profile </Link>
                    <Link to={'/quote'}> Quote </Link>
                    <Link to={'/back'}> Log out </Link>
                    <div>
                        <Switch>
                            <Route exact path='/profile/:id' component={Profile}/>
                            <Route exact path='/quote'/>
                            <Route exact path='/back' component={BackButton}/>
                        </Switch>
                    </div>

                </div>
            </Router>
        </Nav>

    );

};