import newContext from "./newContext";
import { useState,useEffect } from "react";

const UserContext = (props) =>{
    const [user, setUser] = useState(null);
   // const [orders, setOrderes] = useState(null)
    const [orderData, setOrderData] = useState([]);

     //get logged in user details
  const getUser =async () => {
    //todo api call later
    const response = await fetch("http://localhost:5000/api/getuser", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const json = await response.json();
    console.log(json);
    setUser(json);
  }
  
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getUser();
    }
  }, []);
   // Fetch user when the component mounts
  
  const getOrders =async () => {
    //todo api call later
    const response = await fetch("http://localhost:5000/api/fetchallorders", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('authToken')
      }
    });
    const json = await response.json();
     // Extract order_data from each order and flatten the array
     const allOrderData = json.map(order => order.order_data).flat();
     console.log(allOrderData);
     setOrderData(allOrderData);
  }
  return (
    <newContext.Provider value={{ user ,getUser, orderData, getOrders }}>
      {props.children}
    </newContext.Provider>
  )
}
export default UserContext;