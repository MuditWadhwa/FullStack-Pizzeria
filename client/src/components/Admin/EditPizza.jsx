import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getPizzasById,updatePizza } from '../../actions/pizzaAction'
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import {Row,Col,Form,Button} from 'react-bootstrap';
const EditPizza = ({match}) => {
    const [name, setname] = useState('Mudit');
    const [smallPrice, setsmallPrice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [mediumPrice, setmediumPrice] = useState();
    const [image, setimage] = useState('');
    const [description, setdescription] = useState();
    const [category, setcategory] = useState('');
const dispatch = useDispatch();
const getPizzaByState=useSelector(state=>state.getPizzaByIdReducer);

const {loading,error,pizza}=getPizzaByState;
const updatePizzaState=useSelector(state=>state.updatePizzaByIdReducer);
const {updateloading,updatesuccess,updaterror}=updatePizzaState;
const submitForm=(e)=>{
    // console.log(e);
    e.preventDefault();
    const updatedPizza={
      _id:match.params.pizzaId,
      name,image,description,category,
      prices:{
        small:smallPrice,
        medium:mediumPrice,
        large:largeprice
      }
    }
    //console.log(pizza);
    dispatch(updatePizza(updatedPizza));
  }
useEffect(()=>{
    if(pizza)
    {
        if(pizza._id===match.params.PizzasId)
        {
            setname(pizza.name);
            setdescription(pizza.description);
            setcategory(pizza.category);
            setimage(pizza.image);
            setsmallPrice(pizza.prices[0]['small']);
            setmediumPrice(pizza.prices[0]['medium']);
            setlargeprice(pizza.prices[0]['large'])
        }
       dispatch(getPizzasById(match.params.pizzaId));
    } 
    else
    {
        dispatch(getPizzasById(match.params.pizzaId));
    }
},[pizza,dispatch])
    return (
        <div>
        {updateloading && (<Loader/>)}
        {error && <Error error="add new pizza error"/>}
        {/* {success && (<Success success="Pizza Added Successfully"/>)} */}
        <Form onSubmit={submitForm} className="bg-light p-4">
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" 
        value={name} 
        onChange={e=>setname(e.target.value)}
        placeholder="Enter Name" />
      </Form.Group>     
  
      <Row className="mb-3 mt-3">
      <Form.Group as={Col} controlId="formGridCity"
      >
        <Form.Label>Small Price</Form.Label>
        <Form.Control
        value={smallPrice} 
        onChange={e=>setsmallPrice(e.target.value)}
        placeholder="Enter Medium Price"
         />
      </Form.Group>
  
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Medium Price</Form.Label>
        <Form.Control 
           value={mediumPrice} 
        onChange={e=>setmediumPrice(e.target.value)}
        placeholder="Enter medium Price"
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Large Price</Form.Label>
        <Form.Control
        value={largeprice} 
        onChange={e=>setlargeprice(e.target.value)}
        placeholder="Enter Large Price"
         />
      </Form.Group>
    </Row>
  
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control
             value={image} 
        onChange={e=>setimage(e.target.value)}
        placeholder="Enter image"
        />
      </Form.Group>
    </Row>
    
    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Description</Form.Label>
      <Form.Control 
       value={description} 
        onChange={e=>setdescription(e.target.value)}
        placeholder="Enter Description"
       />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Category</Form.Label>
      <Form.Control
       value={category} 
        onChange={e=>setcategory(e.target.value)}
        placeholder="Enter image" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Update Pizza
    </Button>
  </Form>
          </div>
    )
}

export default EditPizza
