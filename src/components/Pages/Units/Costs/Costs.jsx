import { Slider } from "@mui/material";
import React, { useState } from "react";
import "./CostsCSS/Costs.css";

function Costs() {
  const [woodCheck, setWoodCheck] = useState(false);
  const [foodCheck, setFoodCheck] = useState(false);
  const [goldCheck, setGoldCheck] = useState(false);
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
  const showSlider = (e) => {
    e.checked ? setWoodCheck(true) : setWoodCheck(false);
  };
  return (
    <>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" onChange={() => setWoodCheck(!woodCheck)} />
          Wood
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          disabled={woodCheck}
          value={valueWood}
          onChange={changeValueWood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" onChange={() => setFoodCheck(!foodCheck)} />
          Food
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          disabled={foodCheck}
          value={valueFood}
          onChange={changeValueFood}
          getAriaValueText={getText}
          valueLabelDisplay="auto"
          disableSwap
        />
      </div>
      <div className="main row">
        <div className="col-2">
          <input type="checkbox" onChange={() => setGoldCheck(!goldCheck)} />
          Gold
        </div>
        <Slider
          className="slider col"
          min={0}
          max={200}
          //   marks
          disabled={goldCheck}
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
