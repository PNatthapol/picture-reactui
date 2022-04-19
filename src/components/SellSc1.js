import React  from 'react';

import  {Card ,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBBtn}  from 'mdb-react-ui-kit';


// /import 'mdbreact/dist/css/mdb.css';
function SellSc1 () {
    
  
 
   
   
    return (
        <Container fluid className="hsc2">
        <Card>
          <Card.Header as="h5">ฝากขายรูปภาพ</Card.Header>
          <Card.Body>
          <div className="m-3">
             <label className="mx-3">Choose file:</label>
             <input accept="image/*" id="contained-button-file" multiple type="file"  
             /><button className="btn btn-outline-primary"
             >Upload
           </button>
           </div>
           <div>
           <label className="mx-3">ชื่อรูปภาพ</label>
             <input    />
             <label className="mx-3">ราคา</label>
             <input    />
           </div>
           <MDBBtn color="primary">Primary</MDBBtn>
          </Card.Body>
        </Card>
       </Container>
     );
   }
   
   export default SellSc1;
   