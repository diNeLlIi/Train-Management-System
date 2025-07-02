import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loging({ handleLogin }) {
  let navigate = useNavigate();
  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(""); 

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await axios.get(`http://localhost:8084/db-api/users?username=${username}`);
      const users = response.data;
      const userData = users.find(user => user.username === username);

      if (userData && userData.password) {
        if (userData.password === password) {
          handleLogin(); 
          navigate("/home");
        } else {
          setError("Incorrect username or password");
        }
      } else {
        setError("User not found");
      }
    } catch (err) {
      console.error(err); 
      setError("Error while trying to log in. Please check your username or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6 col-lg-4 border rounded p-4 shadow">
        <h2 className="text-center m-4">Login</h2>

        <form onSubmit={onSubmit}>
          {error && <div className="alert alert-danger text-center">{error}</div>}

          <div className="mb-3 row">
            <label htmlFor="username" className="col-sm-4 col-form-label text-end">
              <b>Username</b>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-4 col-form-label text-end">
              <b>Password</b>
            </label>
            <div className="col-sm-8">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={onInputChange}
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary mt-4">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
