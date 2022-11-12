import React,{useState} from 'react';
import {Row,Col,Form,Button} from 'react-bootstrap';
import {addPizza} from '../../actions/pizzaAction';
import {useDispatch,useSelector} from 'react-redux';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Pizza from '../../components/Pizza';
import Success from '../../components/Success';
const AddNewPizza = () => {
  const [name, setname] = useState('');
  const [smallPrice, setsmallPrice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState('');
  const [description, setdescription] = useState();
  const [category, setcategory] = useState('');
  
  const addPizzaState=useSelector(state=>state.addPizzaReducer);
  const {loading,error,success}=addPizzaState;
  const dispatch = useDispatch();
  const submitForm=(e)=>{
    // console.log(e);
    e.preventDefault();
    const pizza={
      name,image,description,category,
      prices:{
        small:smallPrice,
        medium:mediumPrice,
        large:largeprice
      }
    }
    console.log(pizza);
    dispatch(addPizza(pizza));
  }
  return (
        <div>
      {loading && (<Loader/>)}
      {error && <Error error="add new pizza error"/>}
      {success && (<Success success="Pizza Added Successfully"/>)}
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
    Add New
  </Button>
</Form>
        </div>
    )
}

export default AddNewPizza
