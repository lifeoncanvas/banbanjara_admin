import React from "react";
import {Navbar,Collapse,NavbarBrand,NavbarToggler,Nav,NavItem,NavLink,Button} from 'reactstrap'
import classes from './navigation.module.css'
import Image from 'next/image'
//import logoremoved from './logoremoved.png'

const Topbar = () => {
  return (
    <div>
      <Navbar color="faded" light className={classes.navbar}>
        <NavbarBrand className="me-auto" href="/">
        {/* <Image className={classes.image} src={logoremoved} alt="profile"  /> */}
       <h3 className={classes.h3}>Banbanjara</h3> 
                </NavbarBrand>
        <Nav >
            <Button>Logout</Button>
        </Nav>
        {/* <NavbarToggler className="me-2" onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  );
};

export default Topbar;
