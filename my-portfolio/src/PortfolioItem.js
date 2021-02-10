import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PortfolioItem = ({ title, description, link, picture }) => {
  return (
    <Card className="m-8">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>
          Check it out!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PortfolioItem;
