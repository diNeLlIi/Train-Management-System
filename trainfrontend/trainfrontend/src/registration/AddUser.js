import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    privilege: "User",
    password: "", 

  });

  const { email, username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8084/db-api/users", user);
    navigate("/home");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-md-6 col-lg-4 border rounded p-4 shadow">
        <h2 className="text-center m-4">Sign Up</h2>

        <form onSubmit={onSubmit}>
          {/* Username */}
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
              />
            </div>
          </div>

       
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label text-end">
              <b>Email</b>
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={onInputChange}
                required
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
              />
            </div>
          </div>

       
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary mt-4">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
