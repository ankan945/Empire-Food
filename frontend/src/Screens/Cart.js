import React from 'react'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/ContextReducer';


export default function Cart(props) {

  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
   //const handleRemove = (index)=>{
   //  console.log(index)
   // dispatch({type:"REMOVE",index:index})
  //}

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
    props.showAlert("  Your Order Placed Successfully  ","success")
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div className='container m-auto mt-5'>
    <div className='row'>
      <div className='col-12'>
        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col' style={{ color: 'white' }}>#</th>
                <th scope='col' style={{ color: 'white' }}>Name</th>
                <th scope='col' style={{ color: 'white' }}>Quantity</th>
                <th scope='col' style={{ color: 'white' }}>Option</th>
                <th scope='col' style={{ color: 'white' }}>Amount</th>
                <th scope='col' style={{ color: 'white' }}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr key={index}>
                  <th scope='row' style={{ color: 'cyan' }}>{index + 1}</th>
                  <td style={{ color: 'cyan' }}>{food.name}</td>
                  <td style={{ color: 'cyan' }}>{food.qty}</td>
                  <td style={{ color: 'cyan' }}>{food.size}</td>
                  <td style={{ color: 'cyan' }}>{food.price}</td>
                  <td style={{ color: 'cyan' }}>
                    <button type="button" className="btn p-0">
                      <Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <h1 className='fs-2' style={{ color: 'cyan' }}>Total Price: {totalPrice}/-</h1>
      </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <button className='btn bg-success mt-3' onClick={handleCheckOut}>Place Order</button>
      </div>
    </div>
  </div>
  
  )
}