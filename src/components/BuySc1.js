import React from 'react'
import  {Card,Button} from "react-bootstrap";
import "./BuySc1.css";

const cardInfo = [
    {image:"https://drive.google.com/uc?id=1lIjow2adcNF-sDJDLS-rCtslkDWwy5Ba",title:"Hand",text:"1 ETH"},
    {image:"https://drive.google.com/uc?id=17RbfMcdFlA_L76vg7fzXZi0qNnuYk13S",title:"water",text:"2 ETH"},
    {image:"https://drive.google.com/uc?id=17RbfMcdFlA_L76vg7fzXZi0qNnuYk13S",title:"Cat",text:"1.5 ETH"},
    {image:"https://drive.google.com/uc?id=17RbfMcdFlA_L76vg7fzXZi0qNnuYk13S",title:"Fox",text:"3 ETH"}
];
const rendercard = (card,index) =>{
 return (
   

  
    <Card style={{ width: '18rem' }} key ={index}  className="box">
  <Card.Img variant="top" src={card.image} />
  <Card.Body>
    <Card.Title>ชื่อภาพ: {card.title}</Card.Title>
    <Card.Text>
    ราคา: {card.text}
    </Card.Text>
    <Button variant="primary">รายละเอียด</Button>
  </Card.Body>
</Card> 

  )
}
function BuySc1() {
    return(
        <div className="grid">
    {cardInfo.map(rendercard)}
    </div>
    )
    
 
}

export default BuySc1