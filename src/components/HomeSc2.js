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
    <Card.Header as="h4">ตรวจสอบสถานะการสั่งซื้อ</Card.Header>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-6" controlId="formBasictext">
            <Form.Label className="mb-4" as="h5">ค้นหาเลขรหัสของสินค้า</Form.Label>
            <Row>
    <Col xs={9} >
            <Form.Control  type="text" placeholder="รหัสสินค้า"  className="mb-3" size="lg"   />

    </Col>
    <Col xs={3}>
            <Button variant="primary" type="submit" size="sm"> ค้นหา </Button>
    </Col>

            </Row>
        </Form.Group>
        <Form.Label className="mb-4" as="h5">สถานะการจัดส่ง: </Form.Label>
        
        </Form>


        {/* export const Dashboard = () => {
    return (
<div className="tbdash">
{/<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</Col> 
</div>
       
     )

};
export default Dashboard */}

    </Card.Body>
    </Card>
</Container>
        
       
           
    )}

    export default HomeSc2