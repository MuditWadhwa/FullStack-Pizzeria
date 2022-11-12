import React from 'react'
import { Button } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderAction.js';
import Loader from './Loader';
import Error from './Error';
import Success from './Success'
const Checkout = ({subTotal}) => {
    const dispatch=useDispatch();
    const orderState=useSelector(state=>state.placeOrderReducer);
    const {loading,error,success}=orderState;

    const tokenHandler=(token)=>{
      dispatch(placeOrder(token,subTotal))
        console.log(token)
        console.log(subTotal)
    }
    return(
        <> 
        {loading && (<Loader/>)}
        {error && (<Error error="Something went wrong"/>)}
         {success && <Success success="order placed successfully "/>}
         
        <StripeCheckout
        amount={subTotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51JqNndSCqSBQmltqGQgUJtRbga8zmpUD81uE538EyPXUokx8OAUuVFZmCzfLdNkGFjNwZvSJQcNBHH08YjRDFvCW00WvJm0dmd'
        currency='INR'
        >
            <Button>Pay Now</Button>
        </StripeCheckout>
        </>
    )
}

export default Checkout
