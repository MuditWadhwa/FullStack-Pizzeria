import React from 'react';
import {Nav,Navbar,Container,Image,NavDropdown} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import { logoutUser } from '../actions/userAction';
import { LinkContainer } from 'react-router-bootstrap'
const NavBar = () => {
  const dispatch=useDispatch();
  const cartState=useSelector((state)=>(state.cartReducer));
  const userState=useSelector((state)=>(state.loginUserReducer));
  const {currentUser}=userState;
  
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand >
      <Image src="images/logo.png" alt="logo" style={{height:"200px",width:'400px',marginLeft:'300px' }}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    {
      currentUser?(
        <LinkContainer to='/'>
    {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
     
        <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
        <LinkContainer to="/orders">
        <NavDropdown.Item >
        Order
        </NavDropdown.Item>
    </LinkContainer>
          
          <NavDropdown.Item onClick={()=>{dispatch(logoutUser())}}>Logout</NavDropdown.Item>
        </NavDropdown>
    </LinkContainer>):(
      <>
      {" "}
      <LinkContainer to='/login'>
    <Nav.Link>Login</Nav.Link>
    </LinkContainer>
    <LinkContainer to='/register'>
    <Nav.Link>Register</Nav.Link>
    </LinkContainer>
      </>)
    }
    
    <LinkContainer to='/cart'>
    <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
    </LinkContainer>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

export default NavBar
