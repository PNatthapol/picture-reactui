import { React, useState, useEffect } from "react";

import "./DbTable.css";
import { getPictureTable } from "../util/interact.js";
import MaterialTable from 'material-table';
function statusSender(status) {
  if (status === "1") {
    return "สินค้ากำลังขายอยู่";
  } else if (status === "2") {
    return "กำลังเตรียมการจัดส่ง";
  } else if (status === "3") {
    return "ดำเนินการจัดส่งแล้ว";
  } else if (status === "0") {
    return "ไม่มีรูปภาพจำหน่าย";
  } else {
    return "";
  }
}
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
          statusstr: statusSender(pictureTable[7][i]),
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
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Address_wallet', field: 'addressWallet' },
    { title: 'PicName', field: 'picName' },
    { title: 'Name', field: 'name' },
    { title: 'Price (ETH)', field: 'priceeth' },
    { title: 'DeliverAddress', field: 'deliveryAddress' },
    { title: 'Tel', field: 'tel' },
    { title: 'Path', field: 'imagePath' },
    { title: 'Status', field: 'statusstr' },
    { title: 'TrackingNumber', field: 'trackingNumber' }
  ];
 

  return (
    <div style={{ padding: '30px' }}>
      <h1>ข้อมูลสินค้ารูปภาพ</h1>
      <div style={{ maxWidth: '100%' }}>
    <MaterialTable columns={columns} data={dataPictures} title='' />
  </div>
    </div>
  );
}

export default DbTable;
