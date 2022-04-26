import { React, useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./BuySc1.css";
import { getPic } from "../util/interact";

const cardInfo = [
  {
    image: "https://drive.google.com/uc?id=18oCYu1H6ZqH2Ouq8iOehowXN1L-3Y03x",
    title: "Hand",
    text: "1 ETH",
  },
  {
    image: "https://drive.google.com/uc?id=1TJV9x-2L-wb9f4mJ7gHF7MMN1uJu9ZaJ",
    title: "water",
    text: "2 ETH",
  },
  {
    image: "https://drive.google.com/uc?id=1yKs7q4p0XXjgTMKsmgUXaJ42ozrSfAHR",
    title: "Cat",
    text: "1.5 ETH",
  },
  {
    image: "https://drive.google.com/uc?id=1hxtumNmYLyud9lJu5uzMmDILniRXoIdO",
    title: "Fox",
    text: "3 ETH",
  },
  {
    image: "https://drive.google.com/uc?id=12aKeXtufoB_68In7yiLySg48nhRHZpIa",
    title: "girl",
    text: "3 ETH",
  },
  {
    image: "https://drive.google.com/uc?id=1v1XUmxBKNColUeW5u3trsAixRnKSSTVz",
    title: "child",
    text: "3 ETH",
  },
];

const rendercard = (card, index) => {
  return (
    <Row className="mb-6" key={index}>
      <Card style={{ width: "25rem", top: "50px" }} className="box">
        <Col>
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>ชื่อภาพ: {card.title}</Card.Title>
            <Card.Text>ราคา: {card.text}</Card.Text>
            <Button variant="primary">รายละเอียด</Button>
          </Card.Body>
        </Col>
      </Card>
    </Row>
  );
};

function BuySc1() {
  const [imagePath, setImagePath] = useState([]);
  const [picName, setPicName] = useState([]);
  const [price, setPrice] = useState([]);
  const [dataPictures, setDataPictures] = useState([]);

  useEffect(() => {
    async function fetchMessage() {
      const messages = await getPic();

      setImagePath(messages[0]);
      setPicName(messages[1]);
      setPrice(messages[3]);
      let updateObject = {};
      let updateArray = [];
      for (let i = 0; i < messages[2].length; i++) {
        updateObject = {
          image: messages[0][i],
          title: messages[1][i],
          text: messages[3][i],
        };
        updateArray.push(updateObject);
      }
      setDataPictures(updateArray);
      console.log(messages);
    }
    fetchMessage();
  }, []);

  console.log(imagePath);
  console.log(dataPictures);

  return (
    <Container fluid className="hb">
      {/* <Box /> */}
      <Card>
        <Card.Header as="h4">Test</Card.Header>
        <Row className="mb-6">
          <div className="grid">{dataPictures.map(rendercard)}</div>
        </Row>
      </Card>
    </Container>
  );
}

export default BuySc1;

//
