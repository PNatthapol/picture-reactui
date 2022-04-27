import { React, useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./BuySc1.css";
import { getPic } from "../util/interact";

import Model from "./Model";

function BuySc1() {
  const [imagePath, setImagePath] = useState([]);
  const [picName, setPicName] = useState([]);
  const [price, setPrice] = useState([]);
  const [dataPictures, setDataPictures] = useState([]);
  const [model, setModel] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const getData = (id, image, title, text) => {
    let tempData = [id, image, title, text];
    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };
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
          id: messages[2][i],
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
    <>
      <Container fluid className="hb">
        {/* <Box /> */}
        <Card>
          <Card.Header as="h4">รายการภาพสินค้า</Card.Header>
          <Row className="mb-6">
            <div className="grid">
              {dataPictures.map((element) => {
                return (
                  <Row className="mb-6" key={element.id}>
                    <Card
                      style={{ width: "25rem", top: "50px" }}
                      className="box"
                    >
                      <Col>
                        <Card.Img variant="top" src={element.image} />
                        <Card.Body>
                          <Card.Title>รหัสภาพสินค้า: {element.id}</Card.Title>
                          <Card.Text>ชื่อภาพ: {element.title}</Card.Text>
                          <Card.Text>ราคา: {element.text}</Card.Text>
                          <Button
                            onClick={() =>
                              getData(
                                element.id,
                                element.image,
                                element.title,
                                element.text
                              )
                            }
                            variant="primary"
                          >
                            รายละเอียด
                          </Button>
                        </Card.Body>
                      </Col>
                    </Card>
                  </Row>
                );
              })}
            </div>
          </Row>
        </Card>
      </Container>
      {model === true ? (
        <Model
          hide={() => setModel(false)}
          idpic={tempdata[1]}
          imgpic={tempdata[2]}
          imgname={tempdata[3]}
          imgprice={tempdata[4]}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default BuySc1;

//
