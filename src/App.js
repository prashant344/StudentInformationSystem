import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StudentDetails from './Components/StudentDetails';
import PageNotFound from './Components/PageNotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/StudentDetails" component={StudentDetails} />
            <Route component={PageNotFound} />
        </Switch>
      </div>
      </BrowserRouter>      
    );
  }
}

export default App;
