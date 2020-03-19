import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './components/dashboard/dashboardpage';
import SignUpPage from './components/signup/signuppage';

function App() {
  
  return (
    <div className="App">  
      <Switch>
        <Route exact path="/">
          <SignUpPage/>
        </Route>
        <Route path ='/dashboard'>
          <DashboardPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
