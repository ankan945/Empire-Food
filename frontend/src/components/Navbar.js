import React, { useState } from 'react'
import {Link,useNavigate,useLocation} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useContext,useRef} from 'react';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../Screens/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import './Navbar.css';
import newContext from './newContext';
import './modalyoo.css'; // Import the CSS file

export default function Navbar(props) {

const {showAlert}=props;
  const context = useContext(newContext); 
  const {user ,getUser ,orderData, getOrders} = context;
  const [cartView,setCartView] = useState(false)
  let data = useCart();

const navigate = useNavigate();
let location = useLocation();

const refff= useRef(null)
const ref2=useRef(null);

const [isNavCollapsed, setIsNavCollapsed] = useState(true);

const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

const hndllogout = ()=>{
localStorage.removeItem("authToken");
localStorage.clear();
navigate("/login")
props.showAlert("  logged out ","danger");
}

const handleorders = () =>{
    getOrders();
    ref2.current.click();
}

const handleuser = () => {
  getUser(); // Ensure getUser() completes before proceeding
    refff.current.click();
  //write function first then the click..else first time after login problem will be there
}


  return (

    <>
<div>
<button ref={ref2} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal3">
        Launch demo modal
      </button>
      {orderData !== null && (
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <center><h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'cyan' }}>Order Information</h1></center>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              {orderData.map((order, index) => (
                <div key={index}>
                  
                    <ul>
                        {order.map((item, itemIndex) => (
                            <li key={itemIndex}>
                               {item.Order_date ? (
            <p>Order Date: {item.Order_date}</p>
        ) : (
            <div>
                <p>Name: {item.name}</p>
                <p>Quantity: {item.qty}</p>
                <p>Size: {item.size}</p>
                <p>Price: {item.price}</p>
            </div>
        )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
                    </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
</div>
<div>
<button ref={refff} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Launch demo modal
      </button>
      {user !== null && (
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'cyan' }}>User Information</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-item" style={{ color: 'white' }}>Username: <span>{user.name}</span></h4>
                <h4 className="modal-item" style={{ color: 'white' }}>Email ID: <span>{user.email}</span></h4>
                <h4 className="modal-item" style={{ color: 'white' }}>Date Since Signed In: <span>{new Date(user.date).toLocaleDateString()}</span></h4>
                <h4 className="modal-item" style={{ color: 'white' }}>Time Since Signed In: <span>{new Date(user.date).toLocaleTimeString()}</span></h4>
                <h4 className="modal-item" style={{ color: 'white' }}>Address: <span>{user.location}</span></h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
       </div>
        
       <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
      <div className="container-fluid">
        <Link className="navbar-brand custom-brand fs-1 fst-italic mx-3" to="/">Empire-Food</Link>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {!localStorage.getItem("authToken") ? (
            <></>
          ):(
            <li className="nav-item">
            <Link className={`nav-link fs-5 fw-bold mx-3 ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
          </li>
          )}
            <li className="nav-item">
              <Link className={`nav-link fs-5 fw-bold mx-3 ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
            </li>
            {localStorage.getItem("authToken") && (
              <li className="nav-item">
                <Link className="nav-link active fs-5 fw-bold mx-3" aria-current="page" onClick={handleorders}>My Orders</Link>
              </li>
            )}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className='d-flex'>
              <Link className="btn mx-1" to="/login" style={{ backgroundColor: '#212a33', color: 'yellow', border: 'none', borderRadius: '20px', padding: '10px 20px', textDecoration: 'none' }}>Login</Link>
              <Link className="btn mx-1" to="/createuser" style={{ backgroundColor: '#212a33', color: 'yellow', border: 'none', borderRadius: '20px', padding: '10px 20px', textDecoration: 'none' }}>Signup</Link>
            </div>
          ) : (
            <div>
              <div className='btn mx-2' onClick={() => setCartView(true)} style={{ backgroundColor: '#212a33', color: 'yellow', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Cart <Badge pill bg="danger"> {data.length} </Badge>
              </div>
              <button onClick={handleuser} className='btn mx-3' style={{ backgroundColor: '#212a33', color: 'yellow', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}><i className="fa-regular fa-user"></i></button>
              {cartView && <Modal onClose={() => setCartView(false)}><Cart showAlert={showAlert} /></Modal>}
              <div className='btn mx-2' onClick={hndllogout} style={{ backgroundColor: '#212a33', color: 'yellow', border: 'none', borderRadius: '20px', padding: '10px 20px', cursor: 'pointer' }}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
    


    </>
  )
}
