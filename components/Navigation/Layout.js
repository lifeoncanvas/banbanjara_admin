import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../components/Navigation";

const Layout = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="col">
          <Navigation />
        </Col>
        <Col xs={10}>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
