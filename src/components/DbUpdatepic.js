import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { sendPicture } from "../util/interact.js";
import "./DbUpdatepic.css"

function DbUpdatepic() {
  const [tagid, setTagid] = useState("");
  const [postID, setPostID] = useState("");
  const [errorid, setErrorid] = useState("");
  const [errortagnumber, setErrortagnumber] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(tagid.length<1){
      setErrorid('กรุณากรอกที่อยู่รูปภาพให้ถูกต้อง');
      setErrortagnumber('');
    } else if(postID.length<1){
      setErrortagnumber('กรุณากรอกชื่อภาพให้ถูกต้อง');
      setErrorid('');
    }  else{
      setErrorid('');
      setErrortagnumber('');
      const status = await sendPicture(tagid, postID);
      console.log(status);
    }
   
  };

  const inputTagid = (event) => {
    setTagid(event.target.value);
  };

  const inputPostID = (event) => {
    setPostID(event.target.value);
  };

  return (
    <Container fluid className="hsc2">
      <Card>
        <Card.Header as="h5">อัพเดทสถานะการจัดส่ง</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Label className="mb-4" as="h5">
                  เลขรหัสของสินค้า
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="ระบุรหัสสินค้า"
                  className="mb-3"
                  size="lg"
                  min="1"
                  onChange={inputTagid}
                  value={tagid}
                /><small className ="fterror">{errorid}</small>
              </Col>
              <Col>
                <Form.Label className="mb-4" as="h5">
                  เลขรหัสไปรษณีย์
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ระบุเลขtagสินค้า"
                  className="mb-3"
                  size="lg"
                  onChange={inputPostID}
                  value={postID}
                /><small className ="fterror">{errortagnumber}</small>
              </Col>
            </Row>
            <Col className="btnnpic">
              <Button variant="primary" type="submit">
                {" "}
                อัพเดทสถานะ{" "}
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DbUpdatepic;
