import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>E-Dashboard</h1>
        <Nav />
        <Routes>
          <Route path="/" element = {<h1>Product Page</h1>}/>
          <Route path = "/addproduct" element = {<h1>Add Product component</h1>}/>
          <Route path = "/updateproduct" element = {<h1>Update Product Component</h1>}/>
          <Route path = "logout" element = {<h1>Logout Component</h1>}/>
          <Route path = "/profile" element = {<h1>Profile Component</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
