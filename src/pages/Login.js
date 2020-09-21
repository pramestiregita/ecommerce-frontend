import React from 'react';
import {
  Container, Button, ButtonGroup,
  Form, Input
} from 'reactstrap'
import {Link} from 'react-router-dom'

// import images
import logo from '../assets/images/logo.svg'

class Login extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Container className='d-flex flex-column vh-100 justify-content-center align-items-center'>
          <div className='text-center'>
            <div>
              <img src={logo} alt='Logo' />
            </div>
            <div className='mt-3'>
              <span className='h5'>Please login with your account</span>
            </div>
          </div>
          <div className='mt-4'>
            <ButtonGroup>
              <Button className='btn-1 form rounded-left'>Customer</Button>
              <Button className='btn-2 form rounded-right'>Seller</Button>
            </ButtonGroup>
          </div>
          <Form className='auth mt-4'>
            <Input type='text' className='pl-3 auth-input rounded-lg' placeholder='Email' aria-label='Email' />
            <Input type='password' className='mt-3 pl-3 auth-input rounded-lg' placeholder='Password' aria-label='Password' />
            <div className='text-right mt-3'>
              <Link to='/forgot-password' className='fontColor text-decoration-none'>Forgot Password?</Link>
            </div>
            <Link to='/homepage-login'>
              <Button className='w-100 mt-3 btn-1 text-uppercase form rounded-pill'>Login</Button>
            </Link>
          </Form>
          <div className='mt-3'>
            <span>Don't have an account? <Link to='/register' className='fontColor text-decoration-none'>Register</Link></span>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default Login
