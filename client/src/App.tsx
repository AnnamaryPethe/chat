import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./components/Chat/Chat";

const App: React.FC = () => {
  return (
      <Router>
          <Switch>
            <Route path={'/'} exact component={Dashboard}/>
            <Route path={'/chat'}  component={Chat}/>
          </Switch>
      </Router>
  );
};

export default App;
