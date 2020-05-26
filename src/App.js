import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'// el primero solo renderiza que cumpla la regla que se indica en el path //El Seundo nos permite indicar las rutas de manera declarativa
import { Home } from './pages/Home';
import { Details } from './pages/Details';  
import { NoFound } from './pages/Notfound';

import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  
 
  render(){
    //GEnera un enrutador
    // const url = new URL(document.location);
    // const Page = url.searchParams.has('id') ? <Details id={url.searchParams.get('id')}/> : <Home/>

    return (
      <div className="App">
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/details/:id' component={Details}/>
          <Route component={NoFound}/> 
        </Switch>
      </div>
    )
  }
}

export default App;
