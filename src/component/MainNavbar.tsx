import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../style/layout/MainNavbar.module.scss';
import { Navbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';

const MainNavbar = () => {
  return (
    <Navbar sticky="top" bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#/' className={style.navPoint}>
              Me
            </Nav.Link>
            <Nav.Link href='#impressum' className={style.navPoint}>
              Learn
            </Nav.Link>
            <Nav.Link href='#grid' className={style.navPoint}>
              Discover
            </Nav.Link>
            <Nav.Link href='#impressum' className={style.navPoint}>
              Follow
            </Nav.Link>
            <Nav.Link href='#impressum' className={style.navPoint}>
              Impressum
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
