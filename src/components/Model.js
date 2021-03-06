import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { buyPicture } from "../util/interact";
import "./Model.css";
function Model(props) {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  const [namebuy, setNamebuy] = useState("");
  const [addbuy, setAddbuy] = useState("");
  const [telephone, setTelephone] = useState("");
  const [status, setStatus] = useState("");
  const [errorname, setErrorName] = useState("");
  const [erroraddressid, setErrorAddressID] = useState("");
  const [errorTel, setErrorTel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const itemData = { tagid: tagid };
    console.log("Event: Form Submit");
    if (namebuy.length < 1) {
      setErrorName("กรุณากรอกชื่อผู้รับสินค้าให้ถูกต้อง");
      setErrorAddressID("");
      setErrorTel("");
    } else if (addbuy.length < 1) {
      setErrorAddressID("กรุณากรอกที่อยู่รับสินค้าให้ถูกต้อง");
      setErrorName("");
      setErrorTel("");
    } else if (telephone.length < 1) {
      setErrorTel("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
      setErrorName("");
      setErrorAddressID("");
    } else {
      setErrorName("");
      setErrorAddressID("");
      setErrorTel("");

      // ปุ่มกดซื้อ
      const { status } = await buyPicture(
        // props.addressWallet, // "0x9Ce1C02cE72Bc1392d63EB10c5a8cA0eeb1f70d3", // address wallet เจ้าของ
        props.imgprice, // ราคาเป็น wei
        props.idpic, // id รูป
        namebuy, // ชื่อคน
        addbuy, // ที่อยู่
        telephone // เบอร์โทร
      );
      setStatus(status);
      console.log(status);
      props.hide();
    }
  };
  const inputNamebuy = (event) => {
    setNamebuy(event.target.value);
  };
  const inputAddbuy = (event) => {
    setAddbuy(event.target.value);
  };
  const inputTelephone = (event) => {
    setTelephone(event.target.value);
  };
  return (
    <div className="modal show fade" style={modelStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">รายละเอียดสินค้ารูปภาพ</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.hide}
            ></button>
          </div>
          <div className="modal-body">
            <div className="imgfl">
              <img
                src={props.imgpic}
                className="img-fluid hover-shadow"
                alt=""
                style={{ maxWidth: "24rem", display: "block", margin: "auto" }}
              />
            </div>
            <div className="Pictext">รหัสภาพสินค้า: {props.idpic}</div>
            <div className="Pictext">ชื่อภาพ: {props.imgname}</div>
            <div hidden className="Pictext">ราคา: {props.imgprice}</div>
            <div className="Pictext">ราคา: {props.imgpriceeth} ETH</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="Bartext" controlId="formBasicEmail">
                <Form.Label>ชื่อ-นามสกุล ผู้สั่งซื้อ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรุณาระบุ ชื่อ-นามสกุล"
                  onChange={inputNamebuy}
                  value={namebuy}
                />{" "}
                <small className="fterror">{errorname}</small>
              </Form.Group>
              <Form.Group className="Bartext" controlId="formBasicEmail">
                <Form.Label>ที่อยู่จัดส่ง</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรุณาระบุที่อยู่จัดส่ง"
                  onChange={inputAddbuy}
                  value={addbuy}
                />{" "}
                <small className="fterror">{erroraddressid}</small>
              </Form.Group>
              <Form.Group className="Bartext" controlId="formBasicEmail">
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                <Form.Control
                  onChange={inputTelephone}
                  value={telephone}
                  type="number"
                  placeholder="กรุณาระบุเบอร์โทรศัพท์"
                />{" "}
                <small className="fterror">{errorTel}</small>
              </Form.Group>
              <Button 
               
                type="submit"
                //className="btn btn-primary"
                className="BtnButton"
                //onClick={buttonBuyPicture}
              >
                สั่งซื้อรูปภาพ
              </Button>
            </Form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={props.hide}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
