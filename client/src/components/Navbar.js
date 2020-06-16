import React, { useState, useEffect } from 'react';
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
import {useHistory} from 'react-router-dom';


const MyNav = (props) => {
  props.dispatch(fetchUser());
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  // const [user, setUser] = useState(0);
  
  useEffect(()=>{
    if((props.user) && (props.user.logoutPending)){
      history.push('/');
    }
  },[props.user])

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
          </Nav>
          {props.email ? 
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/profile/me">Welcome {props.email}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logOut} href="#">Logout</NavLink>
            </NavItem>
          </Nav>
          :
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/register">Register</NavLink>
            </NavItem>
          </Nav>}
          {/* <Nav className="ml-auto" navbar>
            <NavItem>
            {props.email ? <NavLink href="/profile/me">Welcome {props.email}</NavLink> : <NavLink href="/login">Login</NavLink>}
            </NavItem>
            {props.email ? 
            <NavItem onClick={logOut}>
              <NavLink href="#">Logout</NavLink>
            </NavItem> : null
            }
          </Nav> */}
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