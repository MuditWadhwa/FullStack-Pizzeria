import React,{useEffect} from 'react'
import { getUserOrders } from '../actions/orderAction.js';
import { useSelector,useDispatch } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import Error from '../components/Error.jsx';
import Loader from '../components/Loader.jsx';
const OrderScreen = () => {
    const orderState=useSelector(state=>state.getUserOrdersReducer)
    const  dispatch = useDispatch();
    const {loading,error,orders}=orderState;
    console.log({loading,error,orders});
    useEffect(() => {
        dispatch(getUserOrders())
    }, [dispatch])
    return (
        <div className="container border p-4 bg-light">
            <h1>order screen</h1>
            {loading && (<Loader/>)}
            {error && (<Error error="Something went wrong"/>)}
            {
                orders && 
                orders.map((order)=>(
                    <div>
                 <Row>
                     <Col md={4}>
                         {order.orderItems.map((item)=>(
                            <div className="container"> 
                            <h6>{item.name}[{item.varient}]*{item.quantity}={" "}{item.price}
                            </h6>
                            </div>
                         ))}
                     </Col>
                     <Col md={4}>
                     <h4>Address</h4>
                     <h6>Street:{order.shippingAddress.street}</h6>
                     <h6>City:{order.shippingAddress.city}</h6>
                     <h6>Pincode:{order.shippingAddress.pincode}</h6>
                     <h6>Country:{order.shippingAddress.country}</h6>
                     </Col>
                     <Col md={4}>
                         <h4>Order Info</h4>
                         <h6>Order Amount:{order.orderAmount}</h6>
                         <h6>transactionId:{order.transactionId}</h6>
                     </Col>
                 </Row>
                 </div>
                ))
            }
        </div>
    )
}

export default OrderScreen
