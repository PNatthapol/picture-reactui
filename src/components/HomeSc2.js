import  {Form , Button, Card,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomeSc2.css"

 

function HomeSc2() {
   const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Event: Form Submit');
     };
  
   
    return (
<Container fluid className="hsc2">
    <Card>
    <Card.Header as="h5">ตรวจสอบสถานะการสั่งซื้อ</Card.Header>
    <Card.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>ค้นหาเลขรหัสของสินค้า</Form.Label>
            <Form.Control type="text" placeholder="id" />
            <Button variant="primary" type="submit"> ค้นหา </Button>
        </Form.Group>
        <Form.Label>สถานะการจัดส่ง: กำลังจัดส่ง</Form.Label>
        </Form>
    </Card.Body>
    </Card>
</Container>
    )}

    export default HomeSc2