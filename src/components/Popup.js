// import React, { useState } from 'react'
// import "./Popup.css"
// import {Button} from "react-bootstrap";
// //import Modal from 'react-modal';
// function Popup(props) {
//   const [show,setShow] = useState(false);
//   //const handleClose = setShow(false);
//   //const handleshow = useState(true);
//   //console.log(props);
//   return (props.trigger)?(
   
//     <div className="popup">
//         <div className="popup-inner">
//         <Button  className = "close-btn" variant="outline-secondary" onClick={() =>props.setTrigger(false)}>close</Button>
            
//             {props.children}
            
//             <img
//       src={props.imgpic}
//       className='img-fluid hover-shadow'
//       alt=''
//       style={{ maxWidth: '24rem' }}
//     />
//             <div>รหัสภาพสินค้า: {props.idpic}</div>
//             <div>ชื่อภาพ: {props.imgname}</div>
//             <div>ราคา: {props.imgprice}</div>
//         </div>
//        </div>
      
//   ) :"";
// }

// export default Popup