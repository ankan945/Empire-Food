import React,{useEffect,useState,useContext} from 'react'
import Card from '../components/Card'
import newContext from '../components/newContext';


export default function (props) {

  const context = useContext(newContext); 
  const {getUser} = context;
useEffect(() => {
  if (localStorage.getItem("authToken")) {
    getUser();
  }
}, []);

const [search,setSearch]=useState('');
const [foodCat,setfoodCat] = useState([]);
const [foodItem,setfoodItem] = useState([]);
const {showAlert}=props;

const loadData = async () =>{
  let response = await fetch("http://localhost:5000/api/foodData",{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  }
  });
response=await response.json();
setfoodItem(response[0]);
setfoodCat(response[1]);
//console.log(response[0],response[1]);
}

useEffect(()=>{
  loadData()
},[])


return (
  <div>
    <div className='container'>
      {
        foodCat.length !== 0
        ? foodCat.map((data) => {
            return (
              <div className='row mb-3' key={data._id}>
                <div className="fs-3 m-3 fw-bold fst-italic">{data.CategoryName}</div>
                <hr />
                {
                  foodItem.length !== 0
                  ? foodItem
                      .filter((item) => (item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filterItems => (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card foodItem={filterItems} options={filterItems.options[0]} showAlert={showAlert} />
                        </div>
                      ))
                  : <div>No items found</div>
                }
              </div>
            );
          })
        : <div></div>
      }
    </div>
  </div>
);
}
