import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer mx-auto">
      <span md="4" className="footer-copywright">
        <span>Copyright © {year} || Md. Belaeat Hossain</span>
      </span>
    </Container>
  );
}

export default Footer