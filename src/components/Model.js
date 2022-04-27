
import {React,useState} from 'react'
import {Form,Button } from "react-bootstrap";
function Model(props) {
    let modelStyle ={
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
    const [namebuy, setNamebuy] = useState("");
    const [addbuy, setAddbuy] = useState("");
    const [telephone, setTelephone] = useState("");
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
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick = {props.hide}></button>
      </div>
      <div className="modal-body">
      <img
      src={props.imgpic}
      className='img-fluid hover-shadow'
      alt=''
      style={{ maxWidth: '24rem' }}
    />
            <div>รหัสภาพสินค้า: {props.idpic}</div>
            <div>ชื่อภาพ: {props.imgname}</div>
            <div>ราคา: {props.imgprice}</div>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label  onChange={inputNamebuy}
                    value={namebuy} >ชื่อผู้สั่งซื้อ</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label onChange={inputAddbuy}
                    value={addbuy}>ที่อยู่จัดส่ง</Form.Label>
                    <Form.Control type="text" placeholder="Enter addressid" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >เบอร์โทรศัพท์</Form.Label>
                    <Form.Control onChange={inputTelephone}
                    value={telephone} type="number" placeholder="Enter tel" />
                </Form.Group>
                <Button type="submit" className="btn btn-primary">สั่งซื้อรูปภาพ</Button>
            </Form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick = {props.hide}>Close</button>
        
      </div>
    </div>
  </div>
</div>

  )
}

export default Model