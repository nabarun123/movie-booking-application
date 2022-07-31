import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./pages/authentication/Authentication";
import Home from "./pages/home/Home";
import Customer from "./pages/customer/Customer";
import Client from "./pages/client/Client";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/client" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
