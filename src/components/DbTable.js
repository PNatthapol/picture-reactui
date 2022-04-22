import React from 'react';
import {Table} from 'react-bootstrap';
import './DbTable.css'
function DbTable() {
    const users = [
        {id: 1, address_wallet: 'Anil',  picName: 'anil@test.com',  name: '111' , price: '10ETH',
        deliverAddress:'xx',tel:'33',path: 'xx',status: '3', trackingNumber:'xx'},
        {id: 2, address_wallet: 'Burce', picName: 'bruce@test.com',  name: '222' , price: '10ETH',
        deliverAddress:'xx',tel:'33',path: 'xx',status: '3', trackingNumber:'xx'},
        
      ]
  return (
    <div >
      <h5 className ='topic'>ข้อมูลสินค้ารูปภาพ</h5>
      <div className ='tb1'>
      <Table striped bordered hover size="lg">
        <tbody>
        <tr>
          <td>ID</td>
          <td>Address_wallet</td>
          <td>PicName</td>
          <td>Name</td>
          <td>Price</td>
          <td>DeliverAddress</td>
          <td>Tel</td>
          <td>Path</td>
          <td>Status</td>
          <td>TrackingNumber</td>
        </tr>
        {
          users.map((item)=>
          <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.address_wallet}</td>
        <td>{item.picName}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.deliverAddress}</td>
        <td>{item.tel}</td>
        <td>{item.path}</td>
        <td>{item.status}</td>
        <td>{item.trackingNumber}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default DbTable