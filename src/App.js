import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import History from "./component/history";
import Reviews from "./component/reviews";
import SignIn from "./component/signin";
import Staff from "./component/staff";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <table className="App-header">
        <tr>
          <th><Link to="/">Home</Link></th>
          <th><Link to="/about">About</Link></th>
          <th><Link to="/history">History</Link></th>
          <th><Link to="/reviews">Reviews</Link></th>
          <th><Link to="/staff">Staff</Link></th>
          <th><Link to="/signin">Sign-In</Link></th>
        </tr>
      </table>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="history" element={<History />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="staff" element={<Staff />} />
    </Routes>
    </div>
    </Router>
  );
}
}

export default App;

/* <div>
<h1 style={{textAlign: 'center'}}>Book Club App Website Prototype</h1>
</div>
*/