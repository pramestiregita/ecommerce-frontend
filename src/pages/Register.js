/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import {
  Container, Button, ButtonGroup,
  Form, Input, Alert
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import auth from '../redux/actions/auth'

// import images
import logo from '../assets/images/logo.svg';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  register = (e) => {
    e.preventDefault()
    const {name, email, password} = this.state
    const data = {
      name,
      email,
      password
    }
    this.props.register(data)
  }

  render() {
    const {alertMsg, isError} = this.props.auth
    return (
      <>
        <Container className="d-flex flex-column vh-100 justify-content-center align-items-center">
          <div style={{width: 400}}>
            <Alert width={100} isOpen={alertMsg!==''} color={isError?'danger':'success'} className='text-center'>{alertMsg}</Alert>
          </div>
          <div className="text-center">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="mt-3">
              <span className="h5">Please sign up with your account</span>
            </div>
          </div>
          <div className="mt-4">
            <ButtonGroup>
              <Button className="btn-1 form rounded-left">Customer</Button>
              <Button className="btn-2 form rounded-right">Seller</Button>
            </ButtonGroup>
          </div>
          <Form onSubmit={this.register} className="auth mt-4">
            <Input onChange={this.onChangeText} name='name' type="text" className="pl-3 auth-input rounded-lg" placeholder="Name" aria-label="Name" />
            <Input onChange={this.onChangeText} name='email' type="text" className="mt-3 pl-3 auth-input rounded-lg" placeholder="Email" aria-label="Email" />
            <Input onChange={this.onChangeText} name='password' type="password" className="mt-3 pl-3 auth-input rounded-lg" placeholder="Password" aria-label="Password" />
            <Button type='submit' className="w-100 mt-3 btn-1 text-uppercase form rounded-pill">Sign up</Button>
          </Form>
          <div className="mt-3">
            <span>
              Already have an account?
              {' '}
              <Link to="/login" className="fontColor text-decoration-none">Login</Link>
            </span>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  register: auth.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
