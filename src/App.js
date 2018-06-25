import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StudentDetails from './Components/StudentDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/StudentDetails" component={StudentDetails} />
        </Switch>
      </div>
      </BrowserRouter>      
    );
  }
}

export default App;
