import {React,useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';


const Pizza = ({pizza}) => {
    const dispatch=useDispatch();
    const [show,setShow]=useState(false);
    const [varient,setVarient]=useState('small');
    const [quantity,setQuantity]=useState(1);
     
    const addToCartHandler=()=>{
        dispatch(addToCart(pizza,quantity,varient));
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '18rem',marginTop:"30px"}}
           
            
            >
  <Card.Img variant="top" src={pizza.image} style={{height:'250px',cursor:"pointer" }} onClick={handleShow}/>
  <Card.Body>
    <Card.Title>{pizza.name}</Card.Title>
    <hr/>
    <Card.Text>
      <Row>
          <Col md={6}>
              <h6>Varients</h6>
              <select value={varient} onChange={e=>setVarient(e.target.value)}>
                  {pizza.varients.map(varient=>(
                      <option value={varient} >{varient}</option>
                  ))
                  }
              </select>
          </Col>
          <Col md={6}>
              <h6>Quantity</h6>
              <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((v,i)=>(
                      <option value={i+1} >{i+1}/-RS</option>
                  ))
                  }
              </select>
          </Col>
      </Row>
    </Card.Text>
    <Row>
        <Col md={6}>Price:{pizza.prices[0][varient]*quantity}</Col>
        <Col md={6}><Button 
        className="bg-warning text-white"
        onClick={addToCartHandler}>Add To Cart</Button></Col>
    </Row>
    
  </Card.Body>
</Card>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        
        </div>
        <div>
        <Card.Img variant="top" src={pizza.image} style={{height:'250px',cursor:"pointer" }}/>
            <h5>Description:</h5>
            <h6>{pizza.description}</h6>
        </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default Pizza
