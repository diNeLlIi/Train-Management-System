import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TrainManagement() {
  // State for search functionality
  const [from, setFrom] = useState('Colombo Fort');
  const [to, setTo] = useState('Colombo Fort');
  const [trainData, setTrainData] = useState([]);
  const [error, setError] = useState(null);

  // Handle search
  const handleSearch = () => {
    const apiUrl = `http://localhost:8080/db-api/trains?location=${from}&destination=${to}`;
    
    axios.get(apiUrl)
      .then((response) => {
        setTrainData(response.data);  // Assuming API returns an array of trains
        setError(null);
      })
      .catch((err) => {
        setError('Could not fetch train data');
        setTrainData([]);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-3 mt-3 shadow">
          {/* Search Form */}
          <h2 className='text-center m-4'>Search Trains</h2>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <label htmlFor="from" className="form-label"><b>From:</b></label>
              <select
                id="from"
                className="form-select"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="Kandy">Kandy</option>
                <option value="Colombo Fort">Colombo Fort</option>
                <option value="Gall">Gall</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Badulla">Badulla</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Mathara">Mathara</option>
                <option value="Polgahawela">Polgahawela</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Hatton">Hatton</option>
                <option value="Ella">Ella</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div className="me-2">
              <label htmlFor="to" className="form-label"><b>To:</b></label>
              <select
                id="to"
                className="form-select"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="Kandy">Kandy</option>
                <option value="Colombo Fort">Colombo Fort</option>
                <option value="Gall">Gall</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Badulla">Badulla</option>
                <option value="Polonnaruwa">Polonnaruwa</option>
                <option value="Mathara">Mathara</option>
                <option value="Polgahawela">Polgahawela</option>
                <option value="Trincomalee">Trincomalee</option>
                <option value="Hatton">Hatton</option>
                <option value="Ella">Ella</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <button className="btn btn-primary" onClick={handleSearch} style={{ height: '38px', marginTop: '24px' }}>
              Search
            </button>
          </div>

          {/* Display Search Results */}
          {error && <p className="text-danger">{error}</p>}
          {trainData.length > 0 && (
            <div className="mt-4">
              <h5>Train Results:</h5>
              {trainData.map(train => (
                <div key={train.number} className="mb-3 border rounded p-3 shadow">
                  <h6>Train Details</h6>
                  <p><b>Train Number:</b> {train.number}</p>
                  <p><b>Train Name:</b> {train.trainName}</p>
                  <p><b>Departure Time:</b> {train.departureTime}</p> 
                  <p><b>Arrival Time:</b> {train.arrivalTime}</p>
                  <p><b>Price:</b> {train.price}</p>
                  <Link 
                    className="btn btn-outline-primary" 
                    to="/tickets"
                    state={{
                      trainId: train.number,
                      trainName: train.trainName,
                      arrivalTime: train.arrivalTime,
                      departureTime: train.departureTime,
                      price: train.price,
                      location: from,  
                      destination: to 
                    }}
                  >
                    Book Your Seat
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
