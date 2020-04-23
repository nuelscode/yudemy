import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Categories } from "./components/Categories";
import { SignUp } from './components/auth/SignUp';
import { TeachOnYudemy } from "./components/TeachOnYudemy";
import { YudemyForBusiness } from "./components/YudemyForBusiness";
import { NoMatch } from "./components/NoMatch";
import { LogIn } from './components/auth/LogIn';
import { Layout } from "./components/Layout";
import NavigationBar from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import  SearchBar  from './components/SearchBar';

function App() {
  return (
    <React.Fragment>
    <NavigationBar/>
    <Jumbotron/>
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/business" component={YudemyForBusiness} />
          <Route path="/teach" component={TeachOnYudemy} />
          <Route path="/Categories" component={Categories} />
          <Route path="/SearchBar" component={SearchBar} />
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
