import React, { useEffect, useState } from "react";
import Ages from "./Ages/Ages";
import Datatable from "./Table/Datatable";

import AgeOfUnits from "../../../age-of-empires-units.json";
import Costs from "./Costs/Costs";

const allAges = ["All", ...new Set(AgeOfUnits.units.map((item) => item.age))];

function Units({ productId, setProductId }) {
  const [btnState, setBtnState] = useState(1);
  const [valueWood, setValueWood] = useState([0, 200]);
  const [valueFood, setValueFood] = useState([0, 200]);
  const [valueGold, setValueGold] = useState([0, 200]);
  const [woodCheck, setWoodCheck] = useState(true);
  const [foodCheck, setFoodCheck] = useState(true);
  const [goldCheck, setGoldCheck] = useState(true);
  const [menuItem, setMenuItem] = useState(AgeOfUnits.units);
  const [menuItemWood, setMenuItemWood] = useState(AgeOfUnits.units);
  const [menuItemFood, setMenuItemFood] = useState(AgeOfUnits.units);
  const [buttons, setButtons] = useState(allAges);

  useEffect(() => {
    if (woodCheck === false && foodCheck === false && goldCheck === false) {
      setMenuItem([]);
      return;
    }

    if (woodCheck === false && foodCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && foodCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (foodCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Food >= valueFood[0] &&
          unit.cost.Food <= valueFood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (woodCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Wood >= valueWood[0] &&
          unit.cost.Wood <= valueWood[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 1) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 2) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 3) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 4) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (goldCheck === false && btnState === 5) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 1
    ) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1]
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 2
    ) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Dark"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 3
    ) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Feudal"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 4
    ) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Castle"
      );
      setMenuItem(filteredWoods);
      return;
    } else if (
      goldCheck === true &&
      woodCheck === true &&
      foodCheck === true &&
      btnState === 5
    ) {
      const filteredWoods = AgeOfUnits.units.filter(
        (unit) =>
          unit.cost &&
          unit.cost.Gold >= valueGold[0] &&
          unit.cost.Gold <= valueGold[1] &&
          unit.age === "Imperial"
      );
      setMenuItem(filteredWoods);
      return;
    }
  }, [
    woodCheck,
    foodCheck,
    goldCheck,
    valueWood,
    valueFood,
    valueGold,
    btnState,
  ]);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(AgeOfUnits.units);
      return;
    }

    const filteredData = AgeOfUnits.units.filter((item) => item.age === button);
    setMenuItem(filteredData);
    // console.log(valueWood[1]);
    console.log(woodCheck);
  };

  // const filterCosts = (costta) => {
  //   // if (woodCheck === true) {
  //   //   setMenuItem2(menuItem);
  //   //   return;
  //   // }

  //   if (woodCheck === false) {
  //     const filteredWoods = AgeOfUnits.units.filter((unit) =>
  //       unit.cost
  //         ? unit.cost.Wood >= costta[0] && unit.cost.Wood <= costta[1]
  //         : ""
  //     );
  //     setMenuItemWood(filteredWoods);
  //   }

  //   console.log(woodCheck);
  // };

  return (
    <div className="container">
      <Ages
        button={buttons}
        filter={filter}
        btnState={btnState}
        setBtnState={setBtnState}
      />
      <div className="mt-4 mb-4">
        <Costs
          valueWood={valueWood}
          setValueWood={setValueWood}
          valueFood={valueFood}
          setValueFood={setValueFood}
          valueGold={valueGold}
          setValueGold={setValueGold}
          woodCheck={woodCheck}
          setWoodCheck={setWoodCheck}
          foodCheck={foodCheck}
          setFoodCheck={setFoodCheck}
          goldCheck={goldCheck}
          setGoldCheck={setGoldCheck}
          // filterCosts={filterCosts}
        />
      </div>
      <Datatable
        productId={productId}
        setProductId={setProductId}
        menuItem={menuItem}
        menuItem2={menuItemWood}
      />
    </div>
  );
}

export default Units;
