import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Registrationform from '../Form/form';
import AllUsers from '../AllUsers/AllUsers';
import User from '../ExactUser/user';
import './main.css';

class Main extends Component {

  render() {

    return (
      <div className='main'>
        <header>
          <span><Link to='/Registration'>Registration</Link> </span>
          <span><Link to='/UsersList'>Users List</Link> </span>
        </header>
        <Switch>
          <Route exact path='/Registration' component={Registrationform} />
          <Route exact path='/UsersList' component={AllUsers} />
          <Route path='/UsersList/:id' component={User} />
        </Switch>

      </div>
    )
  }
}
export default Main;