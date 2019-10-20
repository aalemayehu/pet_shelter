import React, {Component} from 'react';
import './App.css';
import "react-router";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import AllPetsTable from './AllPetsTable';
import NewPet from './NewPet';
import OnePet from './OnePet';
import Edit from './Edit';
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
  render (){
    return (
      <BrowserRouter>
      <h1 className = "jumbotron display-2">Pet Shelter</h1>
      <Route exact path="/" component={AllPetsTable} />
      <Route path="/new" component={NewPet} />
      <Route path="/pet/:_id" component={OnePet} />
      <Route path="/edit/:_id" component={Edit} />
      </BrowserRouter>
    );
  }
}

export default App;
