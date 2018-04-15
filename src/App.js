import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
  <Navbar inverse collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
                <img src={logo} className="App-logo" alt="Avatar" />
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1} href="#aboutMe4">About me</NavItem>
            <NavItem eventKey={2} href="#">Projects</NavItem>
            <NavItem eventKey={2} href="#">CV</NavItem>
            <NavItem eventKey={2} href="#">Linkedin</NavItem>
            </Nav>
        </Navbar>

        <div id="abouts">
            <div id="aboutMe">
            <p>
              Hello,
              My name is Brahim, I am a passionated Java developer. My specialities are Gwt for frontend and Java for backend.
              I love learning new technologies like React and NodeJs. Moreover, I used to learn software architecture books. My preferred one is "Clean Architecture" written by Robert C. Martin.
              Besides technology, my hobbies and interests are gym, soccer, reading, cooking.
              </p>
            </div>
            <div id="aboutMe2">
              test about me 2
            </div>
          <div id="aboutMe3">
              test about me 3
          </div>
          <div eventKey={1}>
            test about me 4
          </div>
        </div>
      </div>
    );
  }
}

export default App;
