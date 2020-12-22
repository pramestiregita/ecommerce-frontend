/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import {
  Container, Collapse, Navbar, NavbarBrand,
  Nav, NavbarToggler, NavItem, Row, Col,
  Input, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import auth from '../redux/actions/auth'

// importing images
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import filter from '../assets/images/filter.svg';
import cart from '../assets/images/cart.svg';
import bell from '../assets/images/bell.svg';
import mail from '../assets/images/mail.svg';
import profile from '../assets/images/profile.jpg';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen})
  }

  setLogout = () => {
    this.props.logout() 
    // this.props.history.replace('/login')
    return(
      <Link to='/login' />
    )
  }

  render() {
    return (
      <Navbar color="light" light expand="md" className="shadow sticky-top">
        <Container>
          <Row className="w-100 align-items-center no-gutters">
            <Col xs="12" lg="2" className="mx-auto">
              <div className="mx-auto text-center">
                <NavbarBrand>
                  <Link to="/">
                    <img src={logo} alt="Logo Shop.id" style={{ width: 119, height: 44 }} />
                  </Link>
                </NavbarBrand>
              </div>
            </Col>
            <Col xs="12" lg="10">
              <div className="text-right">
                <NavbarToggler onClick={() => { this.setState({ navbarOpen: !this.state.navbarOpen }); }} />
              </div>
              <Collapse navbar isOpen={this.state.navbarOpen}>
                <Row className="w-100 align-items-center no-gutters">
                  <Col xs="12" lg="8" className="w-100">
                    <Row className="no-gutters mt-3 mt-lg-0">
                      <Col xs="10" lg="10" className="w-100">
                        <div className="d-flex position-relative">
                          <div className="w-100">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <Input className="rounded-pill w-100 input pl-4" type="search" placeholder="Search" aria-label="Search" />
                              </NavItem>
                            </Nav>
                          </div>
                          <div className="search-icon position-absolute">
                            <Nav navbar className="w-100">
                              <NavItem className="w-100">
                                <img src={search} alt="Search Icon" />
                              </NavItem>
                            </Nav>
                          </div>
                        </div>
                      </Col>
                      <Col xs="1" lg="1" className="ml-2">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Button className="btn-3 filter">
                              <img src={filter} alt="Filter" />
                            </Button>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="12" lg="4" className="w-100">
                    <Row className="align-items-center no-gutters mt-3 mt-lg-0">
                      <Col xs="3" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100 cart text-right">
                            <Link to="/my-cart">
                              <img src={cart} alt="My Cart" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/notification">
                              <img src={bell} alt="Notification" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <Link to="/message">
                              <img src={mail} alt="Message" />
                            </Link>
                          </NavItem>
                        </Nav>
                      </Col>
                      <Col xs="3 text-center" lg="3">
                        <Nav navbar className="w-100">
                          <NavItem className="w-100">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle caret className='btn-4'>
                                <img className="rounded-circle" src={profile} alt="Profile" />
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>
                                  <Link to="/my-profile" className='linkColor'>
                                    My Profile
                                  </Link>
                                </DropdownItem>
                                <DropdownItem onClick={this.setLogout}>
                                  Logout
                                </DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
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
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  logout: auth.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)
