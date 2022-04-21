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

            
          <div className="m-3">
             <label className="mx-3">Choose file:</label>
             <input accept="image/*" id="contained-button-file" multiple type="file"  
             />
           </div>
           <Row>
    <Col>
           <label className="mx-3">ชื่อรูปภาพ</label>
             <Form.Control    type="text" placeholder="ระบุชื่อรูปภาพ"  />
             </Col>
             <Col><label className="mx-3">ราคา</label>
             <Form.Control    type="text" placeholder="ระบุราคาสินค้า"  />
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
   