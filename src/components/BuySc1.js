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

  const getData = (id, image, title, text,ethtext) => {
    let tempData = [id, image, title, text,ethtext];
    setTempData((item) => [1, ...tempData]);
    return setModel(true);
  };
  useEffect(() => {
    async function getPicture() {
      //const ethtext = '';
      const pictures = await getPic();

      setImagePath(pictures[0]);
      setPicName(pictures[1]);
      setPrice(pictures[3]);
      let updateObject = {};
      let updateArray = [];
      for (let i = 0; i < pictures[2].length; i++) {
        updateObject = {
          image: pictures[0][i],
          title: pictures[1][i],
          id: pictures[2][i],
          text: pictures[3][i],
          ethtext: (pictures[3][i]/1000000000000000000).toFixed(16).replace(/\.?0+$/,""),
        };
        updateArray.push(updateObject);
      }
      setDataPictures(updateArray);
    }
    getPicture();
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
                          <Card.Text >ราคา: {element.ethtext} ETH</Card.Text>
                          <Card.Text hidden>ราคา: {element.text} wei</Card.Text>
                          <Button
                            onClick={() =>
                              getData(
                                element.id,
                                element.image,
                                element.title,
                                element.text,
                                element.ethtext
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
          imgpriceeth={tempdata[5]}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default BuySc1;

//
