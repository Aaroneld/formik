import React,{ useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import DashboardPage from './components/dashboard/dashboardpage';
import SignUpPage from './components/signup/signuppage';

function App() {
  
  const [formState, setFormState] = useState();

  return (
    <div className="App">  
      <Switch>
        <Route exact path="/">
          <SignUpPage setFormState={setFormState} />
        </Route>
        <Route path ='/dashboard'>
          <DashboardPage formState={formState}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
