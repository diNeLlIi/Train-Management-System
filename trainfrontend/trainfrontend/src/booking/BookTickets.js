import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function BookTickets() {

  let navigate = useNavigate();
  const locationData = useLocation();
  const state = locationData.state || {}; 

  const [tickets, setTickets] = useState({
    customerId: "",
    trainId: state.trainId || "",
    trainName: state.trainName || "",
    arrivalTime: state.arrivalTime || "",
    departureTime: state.departureTime || "",
    location: state.location || "", 
    destination: state.destination || "",
    date: "",
    passengers: "",
    price: state.price || ""
  });

  const { customerId, trainId, arrivalTime, departureTime, location, destination, date, passengers, price } = tickets;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "passengers") {
      const updatedPrice = state.price * value; 
      setTickets({ ...tickets, passengers: value, price: updatedPrice });
    } else {
      setTickets({ ...tickets, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/db-api/tickets", tickets);
    navigate("/thanks");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Booking</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor="customerId" className="form-label">
                <b>Customer ID (<font color="red">*Required</font>)</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter customer ID'
                name="customerId"
                value={customerId}
                onChange={onInputChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="trainId" className="form-label">
                <b>Train Number</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter Train Number'
                name="trainId"
                value={trainId}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="departureTime" className="form-label">
                <b>Departure Time</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter departure time'
                name="departureTime"
                value={departureTime}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="arrivalTime" className="form-label">
                <b>Arrival Time</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter arrival time'
                name="arrivalTime"
                value={arrivalTime}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="location" className="form-label">
                <b>Start Location</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter Start Location'
                name="location" 
                value={location}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="destination" className="form-label">
                <b>Destination</b>
              </label>
              <input
                type="text"
                className='form-control'
                placeholder='Enter Destination'
                name="destination"
                value={destination}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="date" className="form-label">
                <b>Date (<font color="red">*Required</font>)</b>
              </label>
              <input
                type="date"
                className='form-control'
                name="date"
                value={date}
                onChange={onInputChange}
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="passengers" className="form-label">
                <b>Passengers (<font color="red">*Required</font>)</b>
              </label>
              <input
                type="number"
                className='form-control'
                placeholder='Enter number of passengers'
                name="passengers"
                value={passengers}
                onChange={onInputChange}
                min="1"  
                required
              />
            </div>

            <div className='mb-3'>
              <label htmlFor="price" className="form-label">
                <b>Ticket Price (Rs.)</b>
              </label>
              <input
                type="number"
                className='form-control'
                placeholder='Enter Ticket Price'
                name="price"
                value={price}
                readOnly
                onChange={onInputChange}
              />
            </div>

            <button type='submit' className="btn btn-outline-primary">Book Ticket</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
