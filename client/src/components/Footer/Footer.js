import React from "react";
import { render } from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import "./footer.css";

const Footer = () => (
  <footer className="footer">
          <Row>
              <Col sm={{offset:3}} md={{offset:4}} lg={{offset:4}} xs={{offset:2}}>
                <h6>Copyright © 2020, Khalil Brown, All Rights Reserved.</h6>
              </Col>
          </Row>
  </footer>
);
export default Footer;