import React, { useEffect, useState, useRef } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import './Card.css';

export default function Card(props) 
{
let dispatch = useDispatchCart();
let data=useCart()
const priceRef = useRef();
    let options = props.options;
    let priceOp=Object.keys(options);
    const [qty, setQty]= useState(1)
    const [size, setSize]= useState("")

    const hndladdtocart =async ()=>{
if(localStorage.getItem('authToken'))
    {
        let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food !== []) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id:props.foodItem._id, price:props.finalPrice, qty: qty })
          return
        }
        else if (food.size !== size) {
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalprice,qty:qty,size:size})
        return
        }
        return
    }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalprice,qty:qty,size:size})
    }else{
        props.showAlert(" Please login first to order food items ","danger");
    }
}
let finalprice = qty*parseInt(options[size]);
useEffect(()=>{
    setSize(priceRef.current.value)
},[])
    return (
        <div>
                <center>
                <div>
                <div className="card mt-3 card-hover mx-2 my-2" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src={props.foodItem.img} alt="..." style={{height:"160px",objectFit:"fill"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-purple rounded' onChange={(e)=> setQty(e.target.value)}>
                                {
                                    Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}> {i + 1} </option>
                                        )
                                    })}

                            </select>

                            <select className='m-2 h-100 bg-purple rounded' ref={priceRef} onChange={(e)=> setSize(e.target.value) }>
                               {priceOp.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                               })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                ₹{finalprice}/-
                            </div>
                        </div>
                        <hr className='bg-wt' style={{"border":"100%"}}>
                        </hr>
                        <button className={`btn bg-purple justify-center ms-2`}onClick={hndladdtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            </center>
        </div>
    )
}
