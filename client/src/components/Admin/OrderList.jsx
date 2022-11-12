import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { deliverOrder,getAllOrders} from '../../actions/orderAction';
import Error from '../Error';
import Loader from '../Loader';
import {Button, Table} from 'react-bootstrap'
const OrderList = () => {
    const allOrdersState = useSelector(state => state.allUserOrdersReducer);
    const {loading,success,orders,error}=allOrdersState;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])
    return (
        <div>
            <h1>OrderList</h1>
            {loading && (<Loader/>)}
            {error && <Error error="Admin Order req fail"/>}
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Order Id</th>
      <th>User ID</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {orders && orders.map((order)=>(
        <tr key={order._id}>
            <td>{order._id}</td>
             <td>{order.email}</td>
             <td>{order.transectionId}</td>
             <td>Rs {order.orderAmount} /-</td>
             <td>{order.createdAt.substring(0,10)}</td>
             <td>{order.isDelivered?(<h6 className="text-success">Delivered</h6>):
             (<><Button 
             className="btn-danger"
             onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</Button></>)}</td>
        </tr>
    ))}
  </tbody>
</Table>
        </div>
    )
}

export default OrderList
