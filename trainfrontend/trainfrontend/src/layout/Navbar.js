import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sri Lanka Railways
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="d-flex ms-auto">
         
            {isLoggedIn ? (
              <>
                <Link className="btn btn-outline-light me-2" to="/home">Home</Link>
                <Link className="btn btn-outline-light me-2" to="/addtrains">Add Train</Link>
                <Link className="btn btn-outline-light me-2" to="/search">Search Train</Link>
                <Link className="btn btn-outline-light me-2" to="/view">View</Link>
                <Link className="btn btn-outline-light me-2" to="/findlocation">Find Location</Link>
                <Link className="btn btn-outline-light me-2" to ="/loging">Logout</Link>

              </>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/loging">Loging</Link>
                <Link className="btn btn-outline-light" to="/signup">Sign Up</Link>
              </>
            )}
          </div>
          
        </div>
      </nav>
    </div>
  );
}
