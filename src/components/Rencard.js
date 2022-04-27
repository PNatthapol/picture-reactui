// import { React , useState} from "react";
// import { Card, Button, Row, Col } from "react-bootstrap";
// //import Popup from "./Popup";
// import Modalfs from "./Modalfs";

// function Rencard  (props) { 
//   const [butview,setButview] = useState(false);
//   const [viewcard,setViewcard] = useState(true);
//   // const [show,setShow] = useState(false);
//   // const handleClose = setShow(false);
//     //const [cardbuy,setCardbuy] = useState(false);
//     return (
//       <Row className="mb-6" key={props.id} >
//         <Card style={{ width: "25rem", top: "50px" }} className="box" >
//           <Col>
//             <Card.Img variant="top" src={props.image} />
//             <Card.Body>
//               <Card.Title>รหัสภาพสินค้า: {props.id}</Card.Title>
//               <Card.Text>ชื่อภาพ: {props.title}</Card.Text>
//               <Card.Text>ราคา: {props.text}</Card.Text>
//               <Button onClick={() => {setViewcard(false);setButview(true)}}  variant="primary">รายละเอียด</Button>
//             </Card.Body>
//           </Col>
//         </Card>
//         <Modalfs trigger={butview} setTrigger= {setButview} idpic ={props.id} imgpic ={props.image} imgname={props.title}
//         imgprice ={props.text}></Modalfs>
        
//       </Row>
      
      
//     );
//   };

//   export default Rencard;