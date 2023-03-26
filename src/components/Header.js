import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../components/logo.png";
import india from "../components/india.jpg";
import china from "../components/china.jpg";
import usa from "../components/usa.jpg";
import ecuador from "../components/ecuador.png";

const flagsrc = {
  0: india,
  1: china,
  2: usa,
  3: ecuador,
};

export const Header = (props) => {
  const { countryId } = props;

  const flag = flagsrc[countryId];
  console.log("flag: ", flag);

  return (
    <Container fluid>
      <Row>
        <Col xs={2} md={2} lg={2} xlg={2}>
          <img src={logo} width={100} height={100} alt="Logo"></img>
        </Col>

        <Col xs={2} md={2} lg={2} xlg={2}>
          <span className="text-success">
            <h5>Connected</h5>
          </span>
        </Col>

        <Col className="" xs={6} md={6} lg={6} xlg={6}>
          <h1>Food Security Time Series Dashboard</h1>
        </Col>

        <Col xs={2} md={2} lg={2} xlg={2}>
          <img src={flag} width={100} height={100} alt="Country Flag"></img>
        </Col>
      </Row>
    </Container>
  );
};
