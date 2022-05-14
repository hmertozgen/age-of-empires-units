import React, { useState } from "react";
import Ages from "./Ages/Ages";
import Datatable from "./Table/Datatable";

import AgeOfUnits from "../../../age-of-empires-units.json";
import Costs from "./Costs/Costs";

const allAges = ["All", ...new Set(AgeOfUnits.units.map((item) => item.age))];

function Units({ productId, setProductId }) {
  const [valueWood, setValueWood] = useState([20, 70]);
  const [valueFood, setValueFood] = useState([20, 70]);
  const [valueGold, setValueGold] = useState([20, 70]);
  const [woodCheck, setWoodCheck] = useState(false);
  const [foodCheck, setFoodCheck] = useState(false);
  const [goldCheck, setGoldCheck] = useState(false);
  const [menuItem, setMenuItem] = useState(AgeOfUnits.units);
  const [menuItemWood, setMenuItemWood] = useState(AgeOfUnits.units);
  const [menuItemFood, setMenuItemFood] = useState(AgeOfUnits.units);
  const [buttons, setButtons] = useState(allAges);

  // function commonElementsOfArray(arr1, arr2, arr3) {
  //   const map = new Map();
  //   const updateMap = arr => {
  //     arr.forEach(entry => {
  //       if (!map.has(entry)) {
  //         map.set(entry, 1);
  //       } else {
  //         let timesSeen = map.get(entry);
  //         map.set(entry, ++timesSeen);
  //       }
  //     });
  //   };

  //   updateMap(arr1);
  //   updateMap(arr2);
  //   updateMap(arr3);

  //   map.forEach((count, key) => {
  //     // remove all entries not seen at least 3 times
  //     if (count !== 3) {
  //       map.delete(key);
  //     }
  //   });

  //   return [...map.keys()];
  // }

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

  const filterCosts = (costta) => {
    // if (woodCheck === true) {
    //   setMenuItem2(menuItem);
    //   return;
    // }

    if (woodCheck === false) {
      const filteredWoods = AgeOfUnits.units.filter((unit) =>
        unit.cost
          ? unit.cost.Wood >= costta[0] && unit.cost.Wood <= costta[1]
          : ""
      );
      setMenuItemWood(filteredWoods);
    }

    console.log(woodCheck);
  };

  return (
    <div className="container">
      <Ages button={buttons} filter={filter} />
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
          filterCosts={filterCosts}
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
