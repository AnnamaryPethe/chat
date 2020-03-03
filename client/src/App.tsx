import React from 'react';

import {Router, Route, Switch, useParams} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";
import Main_page from "./components/Main/MainPage/Main_page";
import history from "./History"
import Provider from "./context/Provider";

const App: React.FC = () => {
    const {id} = useParams();

    return (
        <Router history={history}>
            <Switch>
                <Route path={'/'} exact component={Main_page}/>
                <Provider >
                <Route path={'/dashboard/:id'} component={Dashboard} />
                <Route path={'/chat/:id'} component={Chat}/>
                </Provider>
            </Switch>
        </Router>
    );
};

export default App;
