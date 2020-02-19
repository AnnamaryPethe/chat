import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";
import Main_page from "./components/Main/MainPage/Main_page";

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const App: React.FC = () => {

    const httpLink = createHttpLink({
        uri: 'http://localhost:8000/user'
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route path={'/'} exact component={Main_page}/>
                <Route path={'/dashboard/:id'} component={Dashboard}/>
                <Route path={'/chat'} component={Chat}/>
            </Switch>
        </Router>
        </ApolloProvider>

    );
};

export default App;
