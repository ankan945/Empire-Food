import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
  let navigate=useNavigate()
    const [userinfo, setuserinfo] = useState({name:"",email:"",password:"",geolocation:""})

    const handleSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:userinfo.name, email:userinfo.email, password:userinfo.password, location:userinfo.geolocation})
        });
        const json = await response.json()
        console.log(json);
        if(json.success)
        {
          props.showAlert("  Your account has been registered, please log in to enjoy our services  ","success");
          navigate("/login");
        }else{
          props.showAlert("Please enter correct details","danger");
        }
    }
    const onChange=(event)=>{
        setuserinfo({...userinfo,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#212a33' }}>
      <div className="container my-3 p-4" style={{ maxWidth: '400px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4" style={{ color: '#343a40' }}>Signup Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label" style={{ color: '#343a40' }}>Name</label>
            <input type="text" className="form-control" name='name' value={userinfo.name} onChange={onChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#343a40' }}>Email address</label>
            <input type="email" className="form-control" name='email' value={userinfo.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#343a40' }}>Password</label>
            <input type="password" className="form-control" name='password' value={userinfo.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#343a40' }}>Address</label>
            <input type="text" className="form-control" name='geolocation' value={userinfo.geolocation} onChange={onChange} id="exampleInputPassword1" />
          </div>
          
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">Submit</button>
            <Link to="/login" className="btn btn-danger">Already Signed up</Link>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
