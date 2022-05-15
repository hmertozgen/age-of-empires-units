import { useMenuItem } from "@mui/base";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AgeOfUnits from "../../../age-of-empires-units.json";

function UnitDetails({ productId, setProductId, setRefId, refId }) {
  const { id } = useParams();

  setRefId(Number(id));
  setProductId(refId);

  const [unit, setUnit] = useState({});

  // useEffect(() => {
  //   setProductId(id);
  // }, [id]);

  useEffect(() => {
    const filterUnit = AgeOfUnits.units.filter((item) => item.id === productId);
    console.log(filterUnit[0]);
    setUnit(filterUnit[0]);
  }, [productId]);

  return (
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
              {unit.cost ? (
                unit.cost.Wood ? (
                  <td>{unit.cost.Wood}</td>
                ) : null
              ) : null}
            </td>
          </tr>
          <tr>
            <th>Food Cost:</th>
            <td>
              {unit.cost ? (
                unit.cost.Food ? (
                  <td>{unit.cost.Food}</td>
                ) : null
              ) : null}
            </td>
          </tr>
          <tr>
            <th>Gold Cost:</th>
            <td>
              {unit.cost ? (
                unit.cost.Gold ? (
                  <td>{unit.cost.Gold}</td>
                ) : null
              ) : null}
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
  );
}

export default UnitDetails;
