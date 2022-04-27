import { React, useState, useEffect } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./BuySc1.css";
import { getPic } from "../util/interact";

import Model from "./Model";
const cardInfo = [
  {
    id: '1',
    image: "https://drive.google.com/uc?id=18oCYu1H6ZqH2Ouq8iOehowXN1L-3Y03x",
    title: "Hand",
    text: "1 ETH",
  },
  {
    id: '2',
    image: "https://drive.google.com/uc?id=1TJV9x-2L-wb9f4mJ7gHF7MMN1uJu9ZaJ",
    title: "water",
    text: "2 ETH",
  },
  {
    id: '3',
    image: "https://drive.google.com/uc?id=1yKs7q4p0XXjgTMKsmgUXaJ42ozrSfAHR",
    title: "Cat",
    text: "1.5 ETH",
  },
  {
    id: '4',
    image: "https://drive.google.com/uc?id=1hxtumNmYLyud9lJu5uzMmDILniRXoIdO",
    title: "Fox",
    text: "3 ETH",
  },
  {
    id: '5',
    image: "https://drive.google.com/uc?id=12aKeXtufoB_68In7yiLySg48nhRHZpIa",
    title: "girl",
    text: "3 ETH",
  },
  {
    id: '6',
    image: "https://drive.google.com/uc?id=1v1XUmxBKNColUeW5u3trsAixRnKSSTVz",
    title: "child",
    text: "3 ETH",
  },
];


function BuySc1() {
  const [imagePath, setImagePath] = useState([]);
  const [picName, setPicName] = useState([]);
  const [price, setPrice] = useState([]);
  const [dataPictures, setDataPictures] = useState([]);
  const [model,setModel] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const getData = (id,image,title,text) =>{
    let tempData = [id,image,title,text];
    setTempData(item=> [1,...tempData]);
    return setModel(true);
  }
  useEffect(() => {
    async function fetchMessage() {
      const messages = await getPic();

      setImagePath(messages[0]);
      setPicName(messages[1]);
      setPrice(messages[3]);
      let updateObject = {};
      let updateArray = [];
      for (let i = 0; i < messages[2].length; i++) {
        updateObject = {
          image: messages[0][i],
          title: messages[1][i],
          id: messages[2][i],
          text: messages[3][i],
        };
        updateArray.push(updateObject);
      }
      setDataPictures(updateArray);
      console.log(messages);
    }
    fetchMessage();
  }, []);

  console.log(imagePath);
  console.log(dataPictures);

  return (
    <>
    <Container fluid className="hb">
      {/* <Box /> */}
      <Card>
        <Card.Header as="h4">รายการภาพสินค้า</Card.Header>
        <Row className="mb-6">
          <div className="grid">{dataPictures.map((element)=>{
            return(
              <Row className="mb-6" key={element.id} >
        <Card style={{ width: "25rem", top: "50px" }} className="box" >
          <Col>
            <Card.Img variant="top" src={element.image} />
            <Card.Body>
              <Card.Title>รหัสภาพสินค้า: {element.id}</Card.Title>
              <Card.Text>ชื่อภาพ: {element.title}</Card.Text>
              <Card.Text>ราคา: {element.text}</Card.Text>
              <Button  onClick={()=> getData(element.id,element.image,element.title,element.text)} variant="primary">รายละเอียด</Button>
            </Card.Body>
          </Col>
        </Card>
        
      </Row>
            );})}</div>
        </Row>
      </Card>
      
    </Container>
    {
      model === true ? <Model hide={()=> setModel(false)} idpic={tempdata[1]} imgpic={tempdata[2]} imgname= {tempdata[3]} imgprice= {tempdata[4]}/>: ''
    }
    
    </>
  );
}

export default BuySc1;

//
