import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Box(props) {
  return (
    <div id="box">
      <img id="img-box" src="https://via.placeholder.com/450" alt="place" />
      <div id="box2">
        {props.name}
        <Link id="link" to="/learn">
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
}

export default Box;
