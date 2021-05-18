import React  from 'react';
//import Entities from './components/Entities';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Configuration from './Configuration';



const Routes = () => {  

  return (
    <Router>
        <Switch>
          <Route path='/Configuration' component={Configuration} />
          <Route path='/index' component={App} />
        </Switch>
      </Router>
   );
};

export default Routes;
