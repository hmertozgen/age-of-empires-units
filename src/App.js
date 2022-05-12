// import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Homepage/Home.jsx";
import Units from "./components/Pages/Units/Units.jsx";
import UnitDetails from "./components/Pages/UnitsDetail/UnitDetails.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/units" element={<Units />}></Route>
          <Route path="/unitdetails" element={<UnitDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
