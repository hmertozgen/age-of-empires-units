import React, { useState } from "react";
import { Link } from "react-router-dom";
import AgeOfUnits from "../../../../age-of-empires-units.json";
import UnitDetails from "../../UnitsDetail/UnitDetails";

function Datatable({ productId, setProductId, menuItem, menuItemWood }) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>costs</th>
          </tr>
        </thead>
        <tbody>
          {menuItem.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link
                    key={item.id}
                    to={`/units/${item.id}`}
                    onClick={() => setProductId(item.id)}
                    className="text-dark text-decoration-none"
                  >
                    {item.id}
                  </Link>
                </td>
                <td>
                  <Link
                    key={item.id}
                    to={`/units/${item.id}`}
                    onClick={() => setProductId(item.id)}
                    className="text-dark text-decoration-none"
                  >
                    {item.name}
                  </Link>
                </td>
                <td>{item.age}</td>
                <td>
                  {item.cost == null && <span>Null</span>}
                  {item.cost !== null && item.cost.Gold ? (
                    <span>{` Gold:${item.cost.Gold} `}</span>
                  ) : null}
                  {item.cost !== null && item.cost.Food ? (
                    <span>{` Food:${item.cost.Food} `}</span>
                  ) : null}
                  {item.cost !== null && item.cost.Wood ? (
                    <span>{` Wood:${item.cost.Wood} `}</span>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    //   <div>
    //     <table className="table table-bordered">
    //       <thead>
    //         <tr>
    //           <th scope="col">id</th>
    //           <th scope="col">name</th>
    //           <th scope="col">age</th>
    //           <th scope="col">costs</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <th scope="row">
    //             {menuItem.map((unit) => {
    //               return (
    //                 <Link key={unit.id} to={`/units/${unit.id}` }>
    //                   <div className="box" key={unit.id}>
    //                     {unit.id}
    //                   </div>
    //                 </Link>
    //               );
    //             })}
    //           </th>
    //           <td>
    //             {menuItem.map((unit) => {
    //               return (
    //                 <div className="box" key={unit.id}>
    //                   {unit.name}
    //                 </div>
    //               );
    //             })}
    //           </td>
    //           <td>
    //             {menuItem.map((unit) => {
    //               return (
    //                 <div className="box" key={unit.id}>
    //                   {unit.age}
    //                 </div>
    //               );
    //             })}
    //           </td>
    // <td>
    //   {menuItem.map((unit) => {
    //     return (
    //       <div className="box" key={unit.id}>
    //         {unit.cost == null && <span>Null</span>}
    //         {unit.cost !== null && unit.cost.Gold ? (
    //           <span>{` Gold:${unit.cost.Gold} `}</span>
    //         ) : null}

    //         {unit.cost !== null && unit.cost.Food ? (
    //           <span>{` Food:${unit.cost.Food} `}</span>
    //         ) : null}
    //         {unit.cost !== null && unit.cost.Wood ? (
    //           <span>{` Wood:${unit.cost.Wood} `}</span>
    //         ) : null}
    //       </div>
    //     );
    //   })}
    // </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
  );
}

export default Datatable;
