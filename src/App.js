import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <table className="App-header">
        <tr>
          <th><Link to="/">Home</Link></th>
          <th><Link to="/about">About</Link></th>
        </tr>
      </table>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
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