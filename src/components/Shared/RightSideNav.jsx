import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "./BrandCarousel";

const RightSideNav = () => {
  return (
    <>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="my-2">Find us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitch/> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaInstagram/> Instagram</ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel/>
      </div>
    </>
  );
};

export default RightSideNav;
