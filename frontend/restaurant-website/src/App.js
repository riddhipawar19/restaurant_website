import React from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Order from './Order';

function App() {
  return (
    
    <Router>
      <div className="app">
         <Switch>
           <Route path="/order">
              <Order/>
           </Route>
           <Route path="/">
              <Header/>
           </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
