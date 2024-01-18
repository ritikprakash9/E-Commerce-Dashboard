import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<h1 className="nav-desc">Product Page</h1>}
          />
          <Route
            path="/addproduct"
            element={<h1 className="nav-desc">Add Product component</h1>}
          />
          <Route
            path="/updateproduct"
            element={<h1 className="nav-desc">Update Product Component</h1>}
          />
          <Route
            path="logout"
            element={<h1 className="nav-desc">Logout Component</h1>}
          />
          <Route
            path="/profile"
            element={<h1 className="nav-desc">Profile Component</h1>}
          />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
