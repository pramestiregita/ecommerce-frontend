/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import {
  Container, Collapse, Navbar, NavbarBrand,
  Nav, NavbarToggler, NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// importing images
import logo from '../assets/images/logo.svg';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };
  }

  render() {
    return (
      <Navbar color="light" light expand="md" className="shadow sticky-top">
        <Container>
          <NavbarBrand>
            <Link to="/homepage">
              <img src={logo} alt="Logo Shop.id" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={() => { this.setState({ navbarOpen: !this.state.navbarOpen }); }} />
          <Collapse navbar isOpen={this.state.navbarOpen}>
            <Nav navbar className="ml-auto">
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/category">Category</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/items">Items</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/users">Users</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
