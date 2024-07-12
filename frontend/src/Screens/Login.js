import React,{useContext, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [userinfo, setuserinfo] = useState({email:"",password:""})
let navigate=useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:userinfo.email, password:userinfo.password})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success)
        {
            alert("Enter valid information")
        }
        if(json.success)
        {
          localStorage.setItem("userEmail",userinfo.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
            navigate("/home");
            props.showAlert("  successsfully logged in  ","success");
           
        }
    }
    const onChange=(event)=>{
        setuserinfo({...userinfo,[event.target.name]:event.target.value})
    }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#212a33' }}>
    <div className="container my-3 p-4" style={{ maxWidth: '400px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 className="text-center mb-4" style={{ color: '#343a40' }}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label"  style={{ color: '#343a40' }}>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userinfo.email}
            onChange={onChange}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text"  style={{ color: '#343a40' }}>Enter valid email id</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label"  style={{ color: '#343a40' }}>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={userinfo.password}
            onChange={onChange}
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/createuser" className="btn btn-danger">Sign up</Link>
        </div>
      </form>
    </div>
  </div>
  )
}
