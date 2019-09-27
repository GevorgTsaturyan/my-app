import React from 'react';
import store from '../Store/store';
import { withRouter } from 'react-router-dom';
import '../ExactUser/user.css'
function User(props) {
  const currentUser = store.currentUser(props.match.params.id)[0];
  return (
    <div className="user">
      <p>The First Name is {currentUser.firstName}</p>
      <p>The Last Name is {currentUser.lastName}</p>
      <p>The Country is {currentUser.country}</p>
      <p>The City is {currentUser.city}</p>
      <p>The Address is {currentUser.address}</p>
      <p>The Second Address is {currentUser.address2}</p>
      <p>The Package type is {currentUser.package}</p>
      <p>The Legal type is {currentUser.selectLegal}</p>

    </div>
  )
}
export default withRouter(User);