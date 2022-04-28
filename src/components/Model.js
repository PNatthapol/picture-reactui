import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { buyPicture } from "../util/interact";
function Model(props) {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  const [namebuy, setNamebuy] = useState("");
  const [addbuy, setAddbuy] = useState("");
  const [telephone, setTelephone] = useState("");
  const [status, setStatus] = useState("");

  const buttonBuyPicture = async () => {
    // ปุ่มกดซื้อ
    const { status } = await buyPicture(
      // "0xF4b3A6900370C5CA9E2ca648a2702C2f1752a423", // address wallet คนซื้อ
      props.imgprice, // ราคาเป็น wei
      props.idpic, // id รูป
      namebuy, // ชื่อคน
      addbuy, // ที่อยู่
      telephone // เบอร์โทร
    );
    setStatus(status);
    console.log(status);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const itemData = { tagid: tagid };
    console.log("Event: Form Submit");
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
            <img
              src={props.imgpic}
              className="img-fluid hover-shadow"
              alt=""
              style={{ maxWidth: "24rem"  ,display: 'block',margin: 'auto'}}
            />
            <div>รหัสภาพสินค้า: {props.idpic}</div>
            <div>ชื่อภาพ: {props.imgname}</div>
            <div>ราคา: {props.imgprice}</div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >
                  ชื่อผู้สั่งซื้อ
                </Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={inputNamebuy} value={namebuy} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >
                  ที่อยู่จัดส่ง
                </Form.Label>
                <Form.Control type="text" placeholder="Enter addressid" onChange={inputAddbuy} value={addbuy}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
                <Form.Control
                  onChange={inputTelephone}
                  value={telephone}
                  type="number"
                  placeholder="Enter tel"
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={buttonBuyPicture}
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
