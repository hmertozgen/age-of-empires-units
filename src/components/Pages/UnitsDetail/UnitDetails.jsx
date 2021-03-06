import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AgeOfUnits from "../../../age-of-empires-units.json";

function UnitDetails({ productId, setProductId, setRefId, refId }) {
  const [unit, setUnit] = useState({});
  const { id } = useParams();

  setRefId(Number(id));
  setProductId(refId);

  // Filtered Unit codes to be displayed on the page START
  useEffect(() => {
    const filterUnit = AgeOfUnits.units.filter((item) => item.id === productId);

    setUnit(filterUnit[0]);
  }, [productId]);
  // Filtered  Unit codes to be displayed on the page END

  return (
    // Unit Details Pages START

    <>
      <div className="text-center fs-2">{unit.name}</div>
      <table className="table table-striped">
        <thead className="mx-auto  "></thead>
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
            <th>Wood Cost:</th>
            <td>
              {unit.cost ? unit.cost.Wood ? <>{unit.cost.Wood}</> : null : null}
            </td>
          </tr>
          <tr>
            <th>Food Cost:</th>
            <td>
              {unit.cost ? unit.cost.Food ? <>{unit.cost.Food}</> : null : null}
            </td>
          </tr>
          <tr>
            <th>Gold Cost:</th>
            <td>
              {unit.cost ? unit.cost.Gold ? <>{unit.cost.Gold}</> : null : null}
            </td>
          </tr>
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
    // Unit Details Pages END
  );
}

export default UnitDetails;
