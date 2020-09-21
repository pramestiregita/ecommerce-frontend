import React from 'react';

// importing components
import Navbar from '../components/NavigationBar'
import GetCategory from '../components/GetCategory'

class Category extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <GetCategory />
      </React.Fragment>
    )
  }
}

export default Category
