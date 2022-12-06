import React from 'react';
import './App.css';
import Submit from './Submission.js';
import Outgoing from './Outgoing.js';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
  
function App() {
  return (
    <div className="a">  
    <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/Meet-the-Team">Meet The Team</Link>
      <Link to="/Submit-a-Request">Submit a Request</Link>
      <Link to="/Our-Rates">Our Rates</Link>
      <Link to="/Our-History">Our History</Link>
      <Link to="/Competition">How We Compare To The Competition</Link>
    <Routes>
      <Route path = "/Submit-a-Request" element={[<Submit key={1}/>, <Outgoing key={2} />]}></Route>
    </Routes>
    </div>
    </Router>
    </div>
  );
}
  
export default App;
