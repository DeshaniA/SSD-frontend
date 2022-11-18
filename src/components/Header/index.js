import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { signout } from '../../actions';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './header.css';

const Header = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  }
  const options = [
    'one', 'two', 'three'
  ];

  const defaultOption = options[0];

  //for login users
  const renderLoggedInLinks = () => {
    return (
      <Nav>
       


        &nbsp;&nbsp;
        <li className="nav-item">

          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">For Managers
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="/managerhome">Add Task</a></li>
              <li><a href="/viewfile"> View All Files</a></li>
              

            </ul>
          </div>


        </li>
        &nbsp;&nbsp;
        <li className="nav-item">

          <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">For Workers
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li><a href="/workerhome">Add Task</a></li>
              <li><a href="/viewtext"> View All Text</a></li>
              

            </ul>
          </div>


        </li>
        &nbsp;&nbsp;
        <li className="nav-item">

<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">For Admin
    <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="/signup">Create New User</a></li>
    <li><a href="/viewfile"> View All Users</a></li>
    

  </ul>
</div>


</li>
&nbsp;&nbsp;
        <li className="nav-item">




</li>


        
&nbsp;&nbsp;
<li className="nav-item">
          <button type="pay" className="btn btn-primary" onClick={logout}>Signout</button>
          {/* <span className="nav-link" onClick={logout}>Signout</span> */}

        </li>

      </Nav>
    );

  }

  //for nonlogin users
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>

        <li className="nav-item">
          <NavLink to="signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
        {/* papers */}
        

        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}

        {/* papers */}
        {/* <li className="nav-item">
        <a className="nav-link" href="/add">Create Items</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/papers">Papers</a> */}
        {/* <Link to = "/add" className ="nav-link">Create Items</Link> */}

        {/* </li> */}
      </Nav>
    );
  }

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>

        <Link to="/" className="navbar-brand">56FIVE</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">


          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()};

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Header