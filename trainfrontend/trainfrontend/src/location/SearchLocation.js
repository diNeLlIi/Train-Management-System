import React, { useState } from 'react';
import axios from 'axios';

export default function SearchLocation() {
  // State for search functionality
  const [location, setLocation] = useState('Colombo Fort');  // Default value
  const [locationData, setLocationData] = useState([]);  // To store location data
  const [error, setError] = useState(null);  // Error handling

  // Handle search
  const handleSearch = () => {
    const apiUrl = `http://localhost:8085/loc-api/locations?location=${location}`;
    
    axios.get(apiUrl)
      .then((response) => {
        setLocationData(response.data);  // Assuming API returns an array of locations
        setError(null);
      })
      .catch((err) => {
        setError('Could not fetch location data');
        setLocationData([]);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-3 mt-3 shadow">
          {/* Search Form */}
          <h2 className='text-center m-4'>About Location</h2>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <label htmlFor="location" className="form-label"><b>Location:</b></label>
              <select
                id="location"
                className="form-select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
          {locationData.length > 0 && (
            <div className="mt-4">
              {locationData.map(location => (
                <div key={location.id} className="mb-3 border rounded p-3 shadow">
                  <div className="d-flex flex-column align-items-center">
                    <p><b>Location Name:</b> {location.location}</p>

                    <div className="text-center">
                      <p><b>Description:</b></p>
                      <p>{location.description}</p>
                    </div>

                    <div className="text-center">
                      <p><b>Milestones:</b></p>
                      <p>{location.milestones}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
