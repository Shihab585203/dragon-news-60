import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Header from "../components/Shared/Header";
import LeftSideNav from "../components/Shared/LeftSideNav";
import RightSideNav from "../components/Shared/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-lg-block d-none">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
