import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


export default function EditTrain() {

let navigate = useNavigate()
const {number: trainNumber}=useParams()

const [train,setTrain]=useState({
  
  number:"",
  trainName:"",
  arrivalTime:"",
  departureTime:"",
  totalCoach:"",
  seatCoach:"",
  location:"", 
  destination:"",
  price:""



})

const{number,trainName,arrivalTime,departureTime,totalCoach,seatCoach,location,destination,price}=train

const onInputChange=(e)=>{
setTrain({...train,[e.target.name]:e.target.value});




};


useEffect(()=>{
  loadTrain();
 
 },[]);



const onSubmit=async(e)=>{
e.preventDefault();
await axios.put(`http://localhost:8080/db-api/trains`,train)
  navigate("/");
  };

  const loadTrain=async ()=>{
    const result =await axios.get(`http://localhost:8080/db-api/trains/${trainNumber}`)
    setTrain(result.data)
  }

  return  <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

<h2 className='text-center m-4'>Edit Train</h2>




<form onSubmit={(e)=>onSubmit(e)} >

<div className='mb-3'>
<label htmlfor ="Train Number" className="form-label">
 <b>Train Engine Number</b> 
</label>
<input
type={"text"}
className='form-control'
placeholder='Enter Train Engine Number'
name ="number"
value={number}
onChange={(e)=>onInputChange(e)}
/>
</div>



<div className='mb-3'>
<label htmlfor ="Train Name" className="form-label">
<b>Train Name</b> 
</label>
<input
type={"text"}
className='form-control'
placeholder='Enter Train Name'
name ="trainName"
value={trainName}
onChange={(e)=>onInputChange(e)}
/>
</div>

<div className='mb-3'>
              <label htmlFor="departureTime" className="form-label">
                <b>Departure Time</b>
              </label>
              <input
                type="number"
                className='form-control'
                placeholder='Enter departure time'
                name="departureTime"
                value={departureTime}
                onChange={onInputChange}
              />
            </div>


<div className='mb-3'>
              <label htmlFor="arrivalTime" className="form-label">
                <b>Arrival Time</b>
              </label>
              <input
                type="number"
                className='form-control'
                placeholder='Enter arrival time'
                name="arrivalTime"
                value={arrivalTime}
                onChange={onInputChange}
              />
            </div>

           

<div className='mb-3'>
<label htmlfor ="coachs" className="form-label">
<b>Total Coachs</b> 

</label>
<input
type={"number"}
className='form-control'
placeholder='Enter Coachs'
name ="totalCoach"
value={totalCoach}
onChange={(e)=>onInputChange(e)}
/>

</div>
<div className='mb-3'>
<label htmlfor ="Total Seats" className="form-label">
  <b>Total Seats(One Coach)</b>

</label>
<input
type={"number"}
className='form-control'
placeholder='Enter Total Seats in One Coach'
name ="seatCoach"
value={seatCoach}//methanadi denna ona api java eke dunna variable names
onChange={(e)=>onInputChange(e)}
/>
</div>

<div className='mb-3'>
  <label htmlFor="location" className="form-label">
    <b>Location</b>
  </label>
  <input
    type={'text'}
    className='form-control'
    placeholder='Enter Train Location'
    name="location"
    value={location}
    onChange={(e) => onInputChange(e)}
  />
</div>



<div className='mb-3'>
<label htmlfor ="Destination" className="form-label">
 <b>Destination</b> 

</label>
<input
type={"text"}
className='form-control'
placeholder='Enter Train Destination'
name ="destination"
value={destination}
onChange={(e)=>onInputChange(e)}
/>
</div>


<div className='mb-3'>
<label htmlfor ="Price" className="form-label">
  <b>Ticket Price(Rs.)</b>

</label>
<input
type={"number"}

className='form-control'
placeholder='Enter Train Ticket Price'
name ="price"
value={price}
onChange={(e)=>onInputChange(e)}
/>
</div>

<button type='submit'  className="btn btn-outline-primary">Submit</button>
<Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
</form>
      </div>


    </div>
     </div>
  
}
