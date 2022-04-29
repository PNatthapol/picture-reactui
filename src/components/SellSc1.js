import { React, useState } from "react";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SellSc1.css";
import { createSellPicture } from "../util/interact.js";

function SellSc1() {
  const [pathPicture, setPathPicture] = useState("");
  const [pictureName, setPictureName] = useState("");
  const [price, setPrice] = useState("");
  const [errorpathPicture, setErrorpathPicture] = useState("");
  const [errorpictureName, setErrorpictureName] = useState("");
  const [errorprice, setErrorprice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(pathPicture.length<1){
      setErrorpathPicture('กรุณากรอกที่อยู่รูปภาพให้ถูกต้อง');
      setErrorpictureName('');
      setErrorprice('');
    } else if(pictureName.length<1){
      setErrorpictureName('กรุณากรอกชื่อภาพให้ถูกต้อง');
      setErrorpathPicture('');
      setErrorprice('');
    } else if(price.length<1){
      setErrorprice('กรุณากรอกราคาสินค้าให้ถูกต้อง');
      setErrorpathPicture('');
      setErrorpictureName('');
    } else{
      setErrorpathPicture('');
      setErrorpictureName('');
      setErrorprice('');
    const status = await createSellPicture(price, pathPicture, pictureName);
    console.log(status);
    }
  };

  const inputPathPicture = (event) => {
    setPathPicture(event.target.value);
  };

  const inputPictureName = (event) => {
    setPictureName(event.target.value);
  };

  const inputPrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Container fluid className="hsc2">
      <Card>
        <Card.Header as="h5">ฝากขายรูปภาพ</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <label className="mx-3">Pathรูปภาพ</label>
                <Form.Control
                  type="text"
                  placeholder="path ที่อยู่รูปภาพ"
                  onChange={inputPathPicture}
                  value={pathPicture}
                /><small className ="fterror">{errorpathPicture}</small>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="mx-3">ชื่อรูปภาพ</label>
                <Form.Control
                  type="text"
                  placeholder="ระบุชื่อรูปภาพ"
                  onChange={inputPictureName}
                  value={pictureName}
                />
                <small className ="fterror">{errorpictureName}</small>
              </Col>
              <Col>
                <label className="mx-3">ราคา</label>
                <Form.Control
                  type="number"
                  placeholder="ระบุราคา หน่วยเป็น wei"
                  onChange={inputPrice}
                  value={price}
                />
                <small className ="fterror">{errorprice}</small>
              </Col>
            </Row>
            <Col className="btnnpic">
              <Button variant="primary" type="submit">
                {" "}
                เพิ่มรูปภาพ{" "}
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SellSc1;
