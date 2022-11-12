import React,{useEffect} from 'react'
import {Table} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {getAllPizzas} from '../../actions/pizzaAction';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { deletePizza } from '../../actions/pizzaAction';
const PizzasList = () => {
    const dispatch=useDispatch();
  const pizzastate=useSelector(state=>state.getAllPizzaReducer);
  const {loading,pizzas,error}=pizzastate;
  useEffect(
    () => {
        dispatch(getAllPizzas())
        }
  ,[dispatch])
    return (
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>S/n</th>
      <th>Pizza Name</th>
      <th>Prices</th>
      <th>Category</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        pizzas && pizzas.map(pizza=>(
            <tr>
                <td></td>
                <td><img src={pizza.image} alt="logo" width="100px" height="100px"/></td>
                <td>{pizza.name}</td>
                <td>small:{pizza.prices[0]['small']}
                <br/>
                 medium:{pizza.prices[0]['medium']}
                 <br/>
                 large:{pizza.prices[0]['large']}
                </td>               
                <td>{pizza.category}</td>
                
                <td>
                <Link to={`/admin/editpizza/${pizza._id}`}>
                <AiFillEdit style={{cursor:'pointer'}}/>
                </Link>&nbsp;

                <AiFillDelete style={{color:'red',cursor:'pointer'}}
                  onClick={()=>{dispatch(deletePizza(pizza._id))}}
                /></td>
            </tr>
        ))
    }
  </tbody>
</Table>
    )
}

export default PizzasList
