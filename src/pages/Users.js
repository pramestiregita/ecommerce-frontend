import React from 'react';

// importing components
import Navbar from '../components/NavigationBar'
import GetUsers from '../components/GetUsers'

class Users extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <GetUsers />
      </React.Fragment>
    )
  }
}

export default Users
