import React from 'react'
import { Navbar as Navi, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Navi  data-bs-theme='dark' bg='dark' expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navi.Brand  className='d-flex align-items-center' href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-stickies-fill" viewBox="0 0 16 16">
  <path d="M0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5A1.5 1.5 0 0 0 0 1.5"/>
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177z"/>
</svg>
        <span className='ms-2'>Sticky Notes</span>
            </Navi.Brand>
        <Navi.Toggle aria-controls="basic-navbar-nav" />
        <Navi.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href='/form'>Create Note</Nav.Link>
          </Nav>
        </Navi.Collapse>
      </Container>
    </Navi>
  )
}
