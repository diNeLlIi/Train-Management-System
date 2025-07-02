import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddTrain from './trains/AddTrain';
import EditTrain from './trains/EditTrain';
import LandPage from './LandPage';
import BookTickets from './booking/BookTickets';
import SearchTrain from './trains/SearchTrain';
import ThankYou from './trains/ThankYou';
import AddUser from './registration/AddUser';
import SearchLocation from './location/SearchLocation';
import Loging from './registration/Loging';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> <br />
        <Routes>
          <Route exact path="/home" element={<LandPage />} />
          <Route exact path="/" element={<Navigate to="/loging" />} /> 
          <Route exact path="/addtrains" element={<AddTrain />} />
          <Route exact path="/trains/:number" element={<EditTrain />} />
          <Route exact path="/tickets" element={<BookTickets />} />
          <Route exact path="/search" element={<SearchTrain />} />
          <Route exact path="/view" element={<Home />} />
          <Route exact path="/thanks" element={<ThankYou />} />
          <Route exact path="/signup" element={<AddUser />} />
          <Route exact path="/loging" element={<Loging handleLogin={handleLogin} />} />
          <Route exact path="/findlocation" element={<SearchLocation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
