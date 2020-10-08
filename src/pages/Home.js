/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Container, Jumbotron, Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// importing components
import Navbar from '../components/NavigationBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <Jumbotron>
          <h1 className="text-center">Welcome, Admin!</h1>
        </Jumbotron>
        <h2>Table of Ecommerce</h2>
        <Table bordered hover responsive className="mt-5">
          <tbody>
            <tr>
              <td>
                <Link to="/category">Category</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/items">Items</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/users">Users</Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
