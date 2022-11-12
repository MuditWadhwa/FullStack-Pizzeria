import React from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux';
import {AiFillMinusCircle,AiFillPlusCircle} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import { addToCart,deletefromCart } from '../actions/cartAction';
import Checkout from '../components/Checkout';
const CartScreen = () => {
    const cartState=useSelector(state=>state.cartReducer);
     const dispatch=useDispatch();
    const cartItems=cartState.cartItems
    const subTotal=cartItems.reduce((x,item)=>x+item.price,0)
    return (
        <Container>
            <Row>
            <Col md={6}>
                 <h1>Cart Items</h1>
                
            <Row>         
            {cartItems.map(item=>(
               <>
               <Col md={5}>
               <img alt={item.name} src={item.image}
                 style={{width:"80px",height:"80px"}}
               />
               <FaTrash
                   className="text-danger"
                 style={{cursor:"pointer" ,marginLeft:"20px"}}
                 onClick={()=>{dispatch(deletefromCart(item))}}
               />
               </Col>
                <Col md={7}>
                <h5>{item.name}[{item.varient}]</h5>
                <h6>
                    {" "}
                    Price:{item.quantity}X {item.prices[0][item.varient]}={" "}
                    {item.price}
                </h6>
                <h6>Quantity:&nbsp;
                <AiFillMinusCircle className="text-danger"
                 style={{cursor:"pointer"}}
                 onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}
                />&nbsp;
                {item.quantity}&nbsp;
                <AiFillPlusCircle className="text-success"
                 style={{cursor:"pointer"}}
                 onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}
                />
                </h6>
               </Col>
               
               
               <hr/>
                               
               </>
            ))}
            </Row>
            </Col>
            <Col md={4}>
               <h1>Payment Info</h1>
                 <h4>RS:{subTotal}/-</h4>
                 {/* <Button>Checkout</Button> */}
                 <Checkout subTotal={subTotal}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartScreen
