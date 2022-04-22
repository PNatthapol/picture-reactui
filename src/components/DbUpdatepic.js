import React from 'react'
import  {Card ,Container,Form,Row,Col,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function DbUpdatepic() {
    const handleSubmit =  (e) => {
        e.preventDefault();
      };
  return (
    <Container fluid className="hsc2">
        <Card>
          <Card.Header as="h5">อัพเดทสถานะการจัดส่ง</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
           <Row>
            <Col>
            <Form.Label className="mb-4" as="h5">เลขรหัสของสินค้า</Form.Label>
            <Form.Control  type="number" placeholder="ระบุรหัสสินค้า"  className="mb-3" size="lg" min="1"  />
             </Col>
             <Col>
             <Form.Label className="mb-4" as="h5">เลขรหัสไปรษณีย์</Form.Label>
             <Form.Control    type="text" placeholder="ระบุเลขtagสินค้า"   className="mb-3" size="lg"  />
             </Col>
             </Row>
             <Col className="btnnpic">
             <Button variant="primary" type="submit"> อัพเดทสถานะ </Button>
           </Col>
           </Form>
          </Card.Body>
        </Card>
       </Container>
  )
}

export default DbUpdatepic