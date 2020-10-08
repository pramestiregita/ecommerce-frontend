import React from 'react';
import {
  Container, Button, ButtonGroup,
  Form, Input, Alert
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import auth from '../redux/actions/auth'

// import images
import logo from '../assets/images/logo.svg'

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      alert: '',
      color: ''
    }
  }

  login = (e) => {
    e.preventDefault()
    const {email, password} = this.state
    const data = {
      email,
      password
    }
    this.props.login(data)
  }

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidUpdate() {
    this.props.auth.isLogin && this.props.history.push('/homepage')
  }
  
  

  render(){
    const {isError, alertMsg} = this.props.auth
    return(
      <React.Fragment>
        <Container className='d-flex flex-column vh-100 justify-content-center align-items-center'>
          <div style={{width: 400}}>
            <Alert className='text-center' color={isError?'danger':'success'} isOpen={isError || alertMsg!==''}>{alertMsg}</Alert>
          </div>
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
          <Form className='auth mt-4' onSubmit={this.login}>
            <Input onChange={this.onChangeText} name='email' type='email' className='pl-3 auth-input rounded-lg' placeholder='Email' aria-label='Email' />
            <Input onChange={this.onChangeText} name='password' type='password' className='mt-3 pl-3 auth-input rounded-lg' placeholder='Password' aria-label='Password' />
            <div className='text-right mt-3'>
              <Link to='/forgot-password' className='fontColor text-decoration-none'>Forgot Password?</Link>
            </div>
            <Button type='submit' className='w-100 mt-3 btn-1 text-uppercase form rounded-pill'>Login</Button>
          </Form>
          <div className='mt-3'>
            <span>Don't have an account? <Link to='/register' className='fontColor text-decoration-none'>Register</Link></span>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth})

const mapDispatchToProps = {
  login: auth.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
