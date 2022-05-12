import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AgeOfUnits from "../../../age-of-empires-units.json";

function UnitDetails({ productId, setProductId }) {
  // const id = useParams();
  const currentUrl = window.location.href;
  // const id = props.match.params.id;
  if (currentUrl.includes(productId)) {
    console.log(productId);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{AgeOfUnits.units.id === productId && <>{productId}</>}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UnitDetails;
