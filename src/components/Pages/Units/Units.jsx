import React, { useState } from "react";
import Ages from "./Ages/Ages";
import Datatable from "./Table/Datatable";

import AgeOfUnits from "../../../age-of-empires-units.json";
import Costs from "./Costs/Costs";

const allAges = ["All", ...new Set(AgeOfUnits.units.map((item) => item.age))];

function Units({ productId, setProductId }) {
  const [menuItem, setMenuItem] = useState(AgeOfUnits.units);
  const [buttons, setButtons] = useState(allAges);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(AgeOfUnits.units);
      return;
    }

    const filteredData = AgeOfUnits.units.filter((item) => item.age === button);
    setMenuItem(filteredData);
  };
  return (
    <div className="container">
      <Ages button={buttons} filter={filter} />
      <div className="mt-4 mb-4">
        <Costs />
      </div>
      <Datatable
        productId={productId}
        setProductId={setProductId}
        menuItem={menuItem}
      />
    </div>
  );
}

export default Units;
