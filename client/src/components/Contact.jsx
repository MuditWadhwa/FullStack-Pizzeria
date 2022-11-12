import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap';
import {FiPhoneCall} from 'react-icons/fi';
import {ImMobile} from 'react-icons/im';
import {AiOutlineMail} from 'react-icons/ai';
const Contact = () => {
    return (
        <div>
        <Container style={{marginTop:'50px'}}>
        <Row>
           <Col md={6}>
            <h1>Tasty Pizza Shop</h1>
            <p>magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi 
            tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique 
            magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis 
            purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas 
            sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean 
            pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui 
            ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis 
            aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet 
            nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in 
            massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam 
            ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea 
            dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis
             feugiat vivamus at augue eget arcu dictum varius duis at consectetur</p>
            <Table striped bordered hover text-center>
  <thead>
    <tr>
      <th className="bg-warning text-center">...Contact Details...</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><FiPhoneCall/></td>
      <td>Phone</td>
      <td>0123-456789</td>
    </tr>
    <tr>
      <td><ImMobile/></td>
      <td>Call</td>
      <td>0123-456789</td>
      
    </tr>
    <tr>
      <td><AiOutlineMail/></td>
      <td>Email</td>
      <td>Help@urdomain.com</td>
      
    </tr>
  </tbody>
</Table>
           </Col>
           <Col md={6}>
               <Image src="images/farmhouse.jpg" style={{width:"100%" ,height:'100%'}}/>
           </Col>
  </Row>            
        </Container>
        
        </div>
    )
}

export default Contact
