import { Slider } from "@mui/material";
import React, { useState } from "react";
import "./CostsCSS/Costs.css";

function Costs() {
  const [valueWood, setValueWood] = useState([20, 70]);
  const [valueFood, setValueFood] = useState([20, 70]);
  const [valueGold, setValueGold] = useState([20, 70]);
  const changeValueWood = (event, value) => {
    setValueWood(value);
  };
  const changeValueFood = (event, value) => {
    setValueFood(value);
  };
  const changeValueGold = (event, value) => {
    setValueGold(value);
  };
  const getText = (value) => {
    return `${value}`;
  };
  return (
    <>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" />
          Wood
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          value={valueWood}
          onChange={changeValueWood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" />
          Food
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          value={valueFood}
          onChange={changeValueFood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" />
          Gold
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          value={valueGold}
          onChange={changeValueGold}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
    </>
  );
}

export default Costs;
