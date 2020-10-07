import React from 'react';
import { 
  Container
} from 'reactstrap'

// importing components
import Navbar from '../components/Navbar2'

class HomePage extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Container className='mb-5 d-flex justify-content-center align-items-center'>
          <h1>Cart</h1>
        </Container>
      </React.Fragment>
    )
  }
}

export default HomePage
