import React, { useState } from "react";

import "./AgesCSS/Ages.css";

function Ages({ button, filter }) {
  const [btnState, setBtnState] = useState(false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  return (
    <>
      {/* <div>
        <div>Ages</div>
        {button.map((age, i) => {
          return (
            <div className="col">
              <button type="button" onClick={() => filter(age)}>
                {age}
              </button>
            </div>
          );
        })}
      </div> */}
      <div className="container">
        <div className="row ages">
          <div className="agesHeader mb-3 mt-5">Ages</div>
          <div className="col-8">
            <div className="row">
              <div className="col border border-dark age All active">
                <button
                  type="button"
                  className="btn w-100"
                  onClick={() => filter("All")}
                >
                  All
                </button>
              </div>
              <div className="col border border-dark age Dark">
                <button
                  type="button"
                  className="btn w-100"
                  onClick={() => filter("Dark")}
                >
                  Dark
                </button>
              </div>
              <div className="col border border-dark age Feudal">
                <button
                  type="button"
                  className="btn w-100"
                  onClick={() => filter("Feudal")}
                >
                  Feudal
                </button>{" "}
              </div>
              <div className="col border border-dark age Castle">
                <button
                  type="button"
                  className="btn w-100"
                  onClick={() => filter("Castle")}
                >
                  Castle
                </button>
              </div>
              <div className="col border border-dark age Imperial">
                <button
                  type="button"
                  className="btn w-100"
                  onClick={() => filter("Imperial")}
                >
                  Imperial
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ages;
