import React  from 'react';

import  {Card ,Container,Form,Row,Col,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SellSc1.css";


function SellSc1 () {
  const handleSubmit =  (e) => {
    e.preventDefault();
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
             <Form.Control    type="text" placeholder="path ที่อยู่รูปภาพ"  />
           </Col>
             </Row>
           <Row>
    <Col>
           <label className="mx-3">ชื่อรูปภาพ</label>
             <Form.Control    type="text" placeholder="ระบุชื่อรูปภาพ"  />
             </Col>
             <Col><label className="mx-3">ราคา</label>
             <Form.Control    type="text" placeholder="ระบุราคาสินค้า หน่วยเป็น wei"  />
             </Col>
             </Row>
             <Col className="btnnpic">
             
             <Button variant="primary" type="submit"> เพิ่มรูปภาพ </Button>
           </Col>
           </Form>
          </Card.Body>
        </Card>
       </Container>
     );
   }
   
   export default SellSc1;
   