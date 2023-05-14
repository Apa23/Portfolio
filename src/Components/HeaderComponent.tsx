import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/Header.css";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export const HeaderComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Personal projects</Nav.Link>
            <Nav.Link href="#formation">Profesional formation</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact-me">Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
