import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./DbTable.css";
import { getPictureTable } from "../util/interact.js";

function DbTable() {
  const [id, setID] = useState([]);
  const [picName, setPicName] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState([]);
  const [tel, setTel] = useState([]);
  const [imagePath, setImagePath] = useState([]);
  const [status, setStatus] = useState([]);
  const [trackingNumber, setTrackingNumber] = useState([]);
  const [addressWallet, setAddressWallet] = useState([]);
  const [dataPictures, setDataPictures] = useState([]);
  

  useEffect(() => {
    async function getPictureTB() {
      const pictureTable = await getPictureTable();

      setID(pictureTable[0]);
      setPicName(pictureTable[1]);
      setName(pictureTable[2]);
      setPrice(pictureTable[3]);
      setDeliveryAddress(pictureTable[4]);
      setTel(pictureTable[5]);
      setImagePath(pictureTable[6]);
      setStatus(pictureTable[7]);
      setTrackingNumber(pictureTable[8]);
      setAddressWallet(pictureTable[9]);

      let updateObject = {};
      let updateArray = [];
      for (let i = 0; i < pictureTable[0].length; i++) {
        updateObject = {
          id: pictureTable[0][i],
          picName: pictureTable[1][i],
          name: pictureTable[2][i],
          price: pictureTable[3][i],
          priceeth: (pictureTable[3][i]/1000000000000000000).toFixed(16).replace(/\.?0+$/,""),
          deliveryAddress: pictureTable[4][i],
          tel: pictureTable[5][i],
          imagePath: pictureTable[6][i],
          status: pictureTable[7][i],
          trackingNumber: pictureTable[8][i],
          addressWallet: pictureTable[9][i],
        };
        updateArray.push(updateObject);
      }
      setDataPictures(updateArray);
    }
    getPictureTB();
  }, []);

  console.log(dataPictures);

 

  return (
    <div>
      <h5 className="topic">ข้อมูลสินค้ารูปภาพ</h5>
      <div className="tb1">
        <Table striped bordered hover size="lg" responsive>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Address_wallet</td>
              <td>PicName</td>
              <td>Name</td>
              <td>Price (ETH)</td>
              <td>DeliverAddress</td>
              <td>Tel</td>
              <td>Path</td>
              <td>Status</td>
              <td>TrackingNumber</td>
            </tr>
            {dataPictures.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.addressWallet}</td>
                <td>{item.picName}</td>
                <td>{item.name}</td>
                <td>{item.priceeth}</td>
                <td>{item.deliveryAddress}</td>
                <td>{item.tel}</td>
                <td>{item.imagePath}</td>
                <td>{item.status}</td>
                <td>{item.trackingNumber}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default DbTable;
