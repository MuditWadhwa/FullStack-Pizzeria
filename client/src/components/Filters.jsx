import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Form,Row,Col,Button} from 'react-bootstrap';
import { filterPizza } from '../actions/pizzaAction';
const Filters = () => {
    const [searchkey, setsearchkey] = useState('');
    const [category, setcategory] = useState('all')
    const  dispatch = useDispatch()
    return (
        <div className="p-4 bg-info mt-4 text-center">
  <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name"
      value={searchkey}
      onChange={e=>setsearchkey(e.target.value)}
      placeholder='Search Pizza'/>
    <select class='form-select' value={category} 
    onChange={e=>setcategory(e.target.value)}>
  <option>All</option>
  <option>veg</option>
  <option>nonveg</option>
</select>
    </Col>
    <Col>
    <Button onClick={()=>{dispatch(filterPizza(searchkey,category))}}>Search</Button>
    </Col>

  </Row>
</Form>
        </div>
    )
}

export default Filters
