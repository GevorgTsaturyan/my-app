import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import store from '../Store/store';
import User from '../ExactUser/user';
import '../AllUsers/AllUsers.css'
class AllUsers extends Component {
  state = {
    user: store.allUsers()
  }

  deleteUser = (id) => {
    store.deleteUser(id);
    this.setState({
      user: store.allUsers()
    })
  }

  render() {

    const users = this.state.user.map((user, index) => {
      return (
        <div key={index}>
          <Link to={`/UsersList/${user.id}`}>{user.firstName} {user.lastName} </Link>
          <button onClick={() => this.deleteUser(user.id)}>DeleteUser</button>
        </div>
      )
    })
    return (
      <div className='allusers'>
        {users}
      </div>
    )
  }
}
export default withRouter(AllUsers);