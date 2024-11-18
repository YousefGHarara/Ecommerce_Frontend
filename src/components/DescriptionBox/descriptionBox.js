import "./descriptionBox.css";

import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          possimus soluta, facere corrupti sed sit architecto aperiam officiis
          alias odio veniam? Aperiam eius aspernatur ad esse saepe. Ullam, iusto
          omnis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          vitae quibusdam tempore ab doloremque dolor corrupti, minima
          necessitatibus suscipit voluptatibus?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
