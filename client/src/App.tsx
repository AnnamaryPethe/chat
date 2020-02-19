import React from 'react';

import {Router, Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";
import Main_page from "./components/Main/MainPage/Main_page";
import history from "./History"

const App: React.FC = () => {

    return (
        <Router history={history}>
            <Switch>
                <Route path={'/'} exact component={Main_page}/>
                <Route path={'/dashboard/:id'} component={Dashboard} />
                <Route path={'/chat/:id'} component={Chat}/>
            </Switch>
        </Router>

    );
};

export default App;
