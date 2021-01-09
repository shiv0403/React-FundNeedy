import React from "react";
import "./Needy.css";

function Needy() {
  return (
    <div className="needy">
      <div className="needy_header">
        {/* title of firm */}
        <h1>Apollo Builders</h1>
        {/* image */}
        <img
          src="https://i.pinimg.com/originals/ba/fc/15/bafc1525cef9606c5c064694ca8e60fb.jpg"
          alt=""
        />
      </div>
      <div className="needy_body">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum dolorum
          molestias iure ducimus adipisci iusto expedita! Molestias eius
          veritatis eos.
        </p>
      </div>
      <div className="needy_footer">
        <p>$2000</p>
        <button>Fund </button>
      </div>
    </div>
  );
}

export default Needy;
