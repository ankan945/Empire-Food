
import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About.js';
import Login from './Screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup';
import { CartProvider } from './components/ContextReducer';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import UserContext from './components/userContext.js';
import Alert from './components/Alert.js';
import React,{useState} from 'react'

function App() {

  const[alert,setAlert]=useState(null);
  const showAlert =(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  }
  return (
    <div className="app-container">
      <UserContext>
    <CartProvider>
        <Router>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert}/>
    <div className="content"> 
      <Routes>
        <Route exact path="/" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/home" element={<Home showAlert={showAlert}/>}/>
        <Route exact path="/about" element={<About showAlert={showAlert}/>} />
        <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route exact path="/createuser" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
    </div>
    <Footer/>
    </Router>
    </CartProvider>
    </UserContext>
    </div>
  );
}

export default App;
