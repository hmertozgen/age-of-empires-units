import React from "react";
import "./AgesCSS/Ages.css";

function Ages() {
  return (
    <>
      <div className="row ages">
        <div className="agesHeader mb-3 mt-5">Ages</div>
        <div className="col-6">
          <div className="row">
            <div className="col border border-dark age All active">All</div>
            <div className="col border border-dark age Dark">Dark</div>
            <div className="col border border-dark age Feudal">Feudal</div>
            <div className="col border border-dark age Castle">Castle</div>
            <div className="col border border-dark age Imperial">Imperial</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ages;
