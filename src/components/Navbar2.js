import React from 'react'
import {
  Container, Collapse, Navbar, NavbarBrand,
  Nav, NavbarToggler, NavItem, Row, Col,
  Input, Button
} from 'reactstrap'
import {Link} from 'react-router-dom'

// importing images
import logo from '../assets/images/logo.svg'
// import search from '../assets/images/search.svg'
import filter from '../assets/images/filter.svg'
import cart from '../assets/images/cart.svg'
import bell from '../assets/images/bell.svg'
import mail from '../assets/images/mail.svg'
import profile from '../assets/images/profile.jpg'

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      navbarOpen: false
    }
  }
  render(){
    return(
      <Navbar color="light" light expand="md" className='shadow sticky-top'>
          <Container>
            <Row className='w-100 align-items-center no-gutters'>
              <Col xs='12' lg='2' className='mx-auto'>
                <div className='mx-auto text-center'>
                  <NavbarBrand>
                    <Link to='/homepage-login'>
                      <img className='img-fluid' src={logo} alt='Logo Shop.id' />
                    </Link>
                  </NavbarBrand>
                </div>
              </Col>
              <Col xs='12' lg='10'>
                <div className='text-right'>
                  <NavbarToggler onClick={()=>{this.setState({navbarOpen: !this.state.navbarOpen})}} />
                </div>
                <Collapse navbar isOpen={this.state.navbarOpen}>
                  <Row className='w-100 align-items-center no-gutters'>
                    <Col xs='12' lg='8' className='w-100'>
                      <Row className='no-gutters mt-3 mt-lg-0'>
                        <Col xs='10' lg='10' className='w-100 d-flex position-relative'>
                          <div className='w-100'>
                            <Nav navbar className='w-100'>
                              <NavItem className='w-100'>
                                <Input className='rounded-pill w-100 input pl-4' type='search' placeholder='Search' />
                              </NavItem>
                            </Nav>
                          </div>
                          {/* <div className='position-absolute'>
                            <Nav navbar className='w-100'>
                              <NavItem className='w-100 search-icon'>
                                <img src={search} alt='Search Icon' />
                              </NavItem>
                            </Nav>
                          </div> */}
                        </Col>
                        <Col xs='1' lg='1' className='ml-2'>
                          <Nav navbar className='w-100'>
                            <NavItem className='w-100'>
                              <Button className='btn-3 filter'>
                                <img src={filter} alt='Filter' />
                              </Button>
                            </NavItem>
                          </Nav>
                       </Col>
                      </Row>
                    </Col>
                    <Col xs='12' lg='4' className='w-100'>
                      <Row className='align-items-center no-gutters mt-3 mt-lg-0'>
                        <Col xs='3' lg='3'>
                          <Nav navbar className='w-100'>
                            <NavItem className='w-100 cart text-right'>
                              <Link to='/my-cart'>
                                <img src={cart} alt='My Cart' />
                              </Link>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col xs='3 text-center' lg='3'>
                          <Nav navbar className='w-100'>
                            <NavItem className='w-100'>
                              <Link to='/notification'>
                                <img src={bell} alt='Notification' />
                              </Link>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col xs='3 text-center' lg='3'>
                          <Nav navbar className='w-100'>
                            <NavItem className='w-100'>
                              <Link to='/message'>
                                <img src={mail} alt='Message' />
                              </Link>
                            </NavItem>
                          </Nav>
                        </Col>
                        <Col xs='3 text-center' lg='3'>
                          <Nav navbar className='w-100'>
                            <NavItem className='w-100'>
                              <Link to='/my-profile'>
                                <img className='rounded-circle' src={profile} alt='Profile' />
                              </Link>
                            </NavItem>
                          </Nav>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
    )
  }
}

export default NavigationBar