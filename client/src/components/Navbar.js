import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUser, logOutUser} from '../actions/userActions'


const MyNav = (props) => {
  props.dispatch(fetchUser());

  const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState(0);

  const toggle = () => setIsOpen(!isOpen);
  const logOut = () => {
    props.dispatch(logOutUser());
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">RPG10</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
            {props.email ? <NavLink>Welcome {props.email}</NavLink> : <NavLink href="/login">Login</NavLink>}
            </NavItem>
            {props.email ? 
            <NavItem onClick={logOut}>
              <NavLink href="#">Logout</NavLink>
            </NavItem> : null
            }
            {/* <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  const { user } = state.userState || {};
  return user;
}

export default connect(mapStateToProps)(MyNav);