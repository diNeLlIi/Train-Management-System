import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function bookingHome() {

const [tickets,setTickets]=useState([]);
const {number} = useParams();

useEffect(()=>
{
    loardTickets();

},[]);

const loardTickets=async()=>
{
    const result=await axios.get("http://localhost:8081/db-api/tickets")
    setTickets(result.data);
};


const deleteTickets=async (number)=>{
await axios.delete(`http://localhost:8080/db-api/trains/${number}`)
loardTickets()
}



  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Engine Number</th>
      <th scope="col">Train Name</th>
      <th scope="col">Coachs</th>
      <th scope="col">Seats(one Coach)</th>
      <th scope="col">Start From</th>
      <th scope="col">Destination</th>
      <th scope="col">Price(Rs.)</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
        tickets.map((tickets,index)=>(
<tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{tickets.customerID}</td>
      <td>{tickets.trainName}</td>
      <td>{tickets.totalCoach}</td>
      <td>{tickets.seatCoach}</td>
      <td>{tickets.location}</td>
      <td>{tickets.destination}</td>
      <td>{tickets.price}</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <Link className="btn btn-outline-primary mx-2"
        to={`/trains/${trains.number}`}

        >Edit</Link>
        <button className="btn btn-danger mx-2"
        onClick={()=>deleteTrain(trains.number)}
        >Delete</button>


      </td>
    </tr>
   

        ))
        
    }
    
  </tbody>
</table>

        </div>

      
    </div>
  )
}
