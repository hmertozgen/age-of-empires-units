import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgeOfUnits from "../../../../age-of-empires-units.json";
import UnitDetails from "../../UnitsDetail/UnitDetails";

function Datatable({ productId, setProductId, menuItem }) {
  return (
    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>name</th>
    //         <th>age</th>
    //         <th>costs</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {menuItem.map((item) => {
    //         return (
    //           <div className="item-cont" key={item.id}>
    //             <tr>
    //               <td>{item.id}</td>
    //               <td>{item.name}</td>
    //               <td>{item.age}</td>
    //               <td></td>
    //             </tr>
    //           </div>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>

    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">costs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {menuItem.map((unit) => {
                return (
                  <Link
                    key={unit.id}
                    to={`/units/${unit.id}`}
                    onClick={setProductId(unit.id)}
                  >
                    <div className="box" key={unit.id}>
                      {unit.id}
                    </div>
                  </Link>
                );
              })}
            </th>
            <td>
              {menuItem.map((unit) => {
                return (
                  <div className="box" key={unit.id}>
                    {unit.name}
                  </div>
                );
              })}
            </td>
            <td>
              {menuItem.map((unit) => {
                return (
                  <div className="box" key={unit.id}>
                    {unit.age}
                  </div>
                );
              })}
            </td>
            <td>
              {menuItem.map((unit) => {
                return (
                  <div className="box" key={unit.id}>
                    {unit.cost == null && <span>Null</span>}
                    {unit.cost !== null && unit.cost.Gold ? (
                      <span>{` Gold:${unit.cost.Gold} `}</span>
                    ) : null}

                    {unit.cost !== null && unit.cost.Food ? (
                      <span>{` Food:${unit.cost.Food} `}</span>
                    ) : null}
                    {unit.cost !== null && unit.cost.Wood ? (
                      <span>{` Wood:${unit.cost.Wood} `}</span>
                    ) : null}
                  </div>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Datatable;
