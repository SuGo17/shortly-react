import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Js/HomePage";
import NavBar from "./Components/Js/NavBar";
import Pricing from "./Components/Js/Pricing";
import ContactUs from "./Components/Js/ContactUs";
import Login from "./Components/Js/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
