import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AgeOfUnits from "../../../age-of-empires-units.json";

function UnitDetails({ productId, setProductId }) {
  const [unit, setUnit] = useState({});
  // const id = useParams();
  // const currentUrl = window.location.href;
  // console.log(currentUrl);
  // console.log(currentUrl.includes(productId));

  useEffect(() => {
    const filterUnit = AgeOfUnits.units.filter((item) => item.id === productId);
    setUnit(filterUnit[0]);

    // console.log(unit);
    // console.log(filterUnit[0]);
    // console.log(unit.cost.Wood);
  }, [productId]);
  // let that = unit.cost;

  // const handleWood = () => {
  //   console.log(unit.cost.Wood);
  //   if (!unit.cost) {
  //     return <td>Null</td>;
  //   }
  //   if (unit.cost.Wood) {
  //     return <td>{unit.cost.Wood}</td>;
  //   }
  // };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr>
            <th>ID:</th>
            <td>{unit.id}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{unit.name}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{unit.description}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{unit.age}</td>
          </tr>
          <tr>
            <th>Wood:</th>
            {/* {that.Wood ? <td>sa</td> : null} */}
          </tr>
          {/* <tr>
            <th>Food Cost:</th>
            {unit.cost.Food ? <>{<td>{unit.cost.Food}</td>}</> : <td>Null</td>}
            
          </tr> */}
          {/* <tr>
            
            {unit.Gold === null && <td>Null</td>}
            {unit.Gold !== null && <td>{unit.cost.Gold}</td>}
          </tr> */}
          <tr>
            <th>Build Time:</th>
            <td>{unit.build_time}</td>
          </tr>
          <tr>
            <th>Reload Time:</th>
            <td>{unit.reload_time}</td>
          </tr>
          <tr>
            <th>Hit Points:</th>
            <td>{unit.hit_points}</td>
          </tr>
          <tr>
            <th>Attack:</th>
            <td>{unit.attack}</td>
          </tr>
          <tr>
            <th>Accuracy:</th>
            <td>{unit.accuracy}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UnitDetails;
