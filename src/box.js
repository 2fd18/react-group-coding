import React from "react";
import "./index.css";

function Box(props) {
  return (
    <div id="box">
      <img id="img-box" src="https://via.placeholder.com/450" alt="place" />
      <div id="box2">
        {props.name}
        <a href="learn.html">
          <button>Learn More</button>
        </a>
      </div>
    </div>
  );
}

export default Box;
