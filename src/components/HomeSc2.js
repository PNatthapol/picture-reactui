import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeSc2.css";
import {
  //getPic,
  pictures,
} from "../util/interact.js";

import { React, useState } from "react";

function statusSender(status) {
  if (status === "1") {
    return "สินค้ากำลังขายอยู่";
  } else if (status === "2") {
    return "กำลังเตรียมการจัดส่ง";
  } else if (status === "3") {
    return "ดำเนินการจัดส่งแล้ว";
  } else if (status === "0") {
    return "ไม่มีรูปภาพจำหน่าย";
  } else {
    return "";
  }
}

function HomeSc2() {
  const [tagid, setTagid] = useState("");
  const [status, setStatus] = useState("");
  const [postID, setPostID] = useState("");
  const [errortagid, setErrorTagid] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemData = { tagid: tagid };
    console.log("Event: Form Submit");
    if(tagid.length>0){
      setErrorTagid('');
    
    const pictures1 = await pictures(itemData.tagid);
    const status = pictures1["status"];
    setStatus(status);
    const postID = pictures1["trackingNumber"];
    setPostID(postID);
    console.log(status);
  }else{
    setErrorTagid('กรุณาป้อนเลขรหัสสินค้าให้ถูกต้อง');
  }

  };
  const inputTagid = (event) => {
    setTagid(event.target.value);
  };
  const inputStatus = (event) => {
    setStatus(event.target.value);
  };
  const inputPostID = (event) => {
    setPostID(event.target.value);
  };
  return (
    <Container fluid className="hsc2">
      <Card>
        <Card.Header as="h4">ตรวจสอบสถานะการสั่งซื้อ</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-6" controlId="formBasictext">
              <Form.Label className="mb-4" as="h5">
                ค้นหาเลขรหัสของสินค้า
              </Form.Label>
              <Row>
                <Col xs={10}>
                  <Form.Control
                    type="number"
                    placeholder="รหัสสินค้า"
                    min="1"
                    className="mb-3"
                    size="lg"
                    onChange={inputTagid}
                    value={tagid}
                  />
                  <small className ="fterror">{errortagid}</small>
                </Col>
                <Col xs={2}>
                  <Button variant="primary" type="submit" >
                    {" "}ค้นหา{" "}
                  </Button>
                </Col>
              </Row>
            </Form.Group>
            <Form.Label
              className="mb-4"
              as="h5"
              onChange={inputStatus}
              value={status}
            >
              สถานะการจัดส่ง: {statusSender(status)}{" "}
            </Form.Label>
            <Form.Label
              className="mb-4"
              as="h5"
              onChange={inputPostID}
              value={postID}
            >
              รหัสสินค้าไปรษณีย์: {postID}{" "}
            </Form.Label>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomeSc2;
