import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Categories } from "./Categories";
import { SignUp } from './components/auth/SignUp';
import { TeachOnYudemy } from "./TeachOnYudemy";
import { YudemyForBusiness } from "./YudemyForBusiness";
import { NoMatch } from "./NoMatch";
import { LogIn } from './components/auth/LogIn';
import { Layout } from "./components/Layout";
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/business" component={YudemyForBusiness} />
            <Route path="/teach" component={TeachOnYudemy} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
