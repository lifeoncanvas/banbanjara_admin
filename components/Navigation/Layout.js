import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from './index'
import classes from './navigation.module.css'
import Topbar from './Topbar'

const Layout = ({children}) => {
  return (
    <div >
      <Topbar/>
      <Row className={`${classes.row} gx-0`} >
        
        <Col xs='2' >
          <Navigation/>
        </Col >
        <Col xs='10'>{children}</Col>
      </Row>
    </div>

    
  );
};

export default Layout;
