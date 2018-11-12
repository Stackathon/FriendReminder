import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light>
          <NavbarBrand href="/" className="mr-auto">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/add/">Add Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/texts">Text Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/responses">Friend Responses</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// import React from 'react'
// import {Link} from 'react-router-dom'

// const Navbar = (props) => {
//     return (
//         <div id="navbar"  className="row">
//             <Link to="/students"> Students </Link>
//             <Link to="/"> Home </Link>
//             <Link to="/campuses"> Campuses </Link>
//         </div>
//     )
// }

// export default Navbar
