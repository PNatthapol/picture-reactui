import  {Form , Button, Card,Container,Row,Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomeSc2.css"
import {
    
    getPic,
    balance,
    pictures,
  } from "../util/interact.js"
 
import React from 'react';
        

function HomeSc2() {
   const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Event: Form Submit');
        const b = await balance();
    console.log(b);
    console.log("Test");
    const pic = await getPic();
    const picName = pic[1];
    
    console.log(pic);
    console.log(picName);
    const pictures1 = await pictures(1);
    console.log(pictures1);
     };
  
   
    return (
        <Container fluid className="hsc2">
    <Card>
    <Card.Header as="h5">ตรวจสอบสถานะการสั่งซื้อ</Card.Header>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>ค้นหาเลขรหัสของสินค้า</Form.Label>
            <Row>
    <Col>
            <Form.Control  type="text" placeholder="id" />
            </Col>
    <Col>
            <Button variant="primary" type="submit"> ค้นหา </Button>
            </Col>
  </Row>
        </Form.Group>
        <Form.Label>สถานะการจัดส่ง: </Form.Label>
        </Form>
    </Card.Body>
    </Card>
</Container>
        
       
           
    )}

    export default HomeSc2