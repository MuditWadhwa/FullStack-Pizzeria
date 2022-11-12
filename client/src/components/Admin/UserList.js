import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'; 
import { deleteUser, getAllUsers } from '../../actions/userAction';
import {Table} from 'react-bootstrap';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import {AiFillDelete} from 'react-icons/ai';
const UserList = () => {
    const userState=useSelector(state=>state.getAllUsersReducer)
    const dispatch=useDispatch();
    const {loading,error,users}=userState
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])
    return (
        <div>
            <h1>Userlist</h1>
            {loading && (<Loader/>)}
            {error && <Error error="Error while Fetching Users"/>}
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>User ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {users && users.map(user=>(
      <tr key={user._id}>
       <td>{user._id}</td>
       <td>{user.name}</td>
       <td>{user.email}</td>
       <td><AiFillDelete 
       style={{color:'red',cursor:'pointer'}}
       onClick={()=>{dispatch(deleteUser(user._id))}}    
       /></td>
      </tr>
  ))

  }
  </tbody>
</Table>
        </div>
    )
}

export default UserList;
