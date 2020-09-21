import React from 'react';

// importing components
import Navbar from '../components/NavigationBar'
import GetItems from '../components/GetItems'

class Items extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <GetItems />
      </React.Fragment>
    )
  }
}

export default Items
