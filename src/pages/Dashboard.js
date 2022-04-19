import React from "react";
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";


export const Dashboard = () => {
    return (
<div className="tbdash">
 <Table responsive>
  <thead>
    <tr>
      <th>id</th>
      {Array.from({ length: 5 }).map((_, index) => (
        <th key={index}>Table heading</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>2</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
    <tr>
      <td>3</td>
      {Array.from({ length: 5 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
 </Table>  
</div>
       
     )

};
export default Dashboard