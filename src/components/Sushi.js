import React from "react";

function Sushi({ name, image, price, eatSushi, isEaten }) {
  

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {!isEaten ? 
          <img
            src={image}
            alt={name}
            width="100%"
          /> 
        : null}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
