import React from "react";

function Sushi({ name, image, price }) {
  

  return (
    <div className="sushi">
      <div className="plate" onClick={null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
