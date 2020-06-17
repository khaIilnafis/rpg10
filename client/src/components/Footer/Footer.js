import React from "react";
import { render } from "react-dom";
import { Container, Row, Col } from 'reactstrap';
import "./footer.css";

const Footer = () => (
  <footer className="footer">
          <Row>
              <Col lg={{offset:1}}>
                <h6>Copyright © 2020, Khalil Brown, All Rights Reserved.</h6>
              </Col>
          </Row>
  </footer>
);
export default Footer;