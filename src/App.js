import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';


class App extends React.Component{

  render(){
    return (
      <div>
        <BrowserRouter>
          
          <Switch>
            <Route  exact path = '/' component ={HomePage}/>
            <ProtectedRoute  exact path = '/dashboard' component ={Dashboard} />
            <Route  exact path = '/signup' component = {SignUp} />
            <Route  exact path = '/login' component = {LogIn}/>
          </Switch>

        </BrowserRouter>

      </div>
    );
  }
}
export default App;
