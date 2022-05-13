// import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./components/Pages/Homepage/Home.jsx";
import Units from "./components/Pages/Units/Units.jsx";
import UnitDetails from "./components/Pages/UnitsDetail/UnitDetails.jsx";
import { useState } from "react";

function App() {
  const [productId, setProductId] = useState();
  const { id } = useParams();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/units"
            element={
              <Units productId={productId} setProductId={setProductId} />
            }
          ></Route>
          <Route
            path="/units/:productId"
            element={
              <UnitDetails productId={productId} setProductId={setProductId} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
