import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, onClickMore, eatSushi, isEaten }) {

  const sushiComponent = sushi.map(sushi => {
    return (
      <Sushi 
        key={sushi.id} 
        name={sushi.name} 
        image={sushi.img_url}
        price={sushi.price}
        eatSushi={eatSushi}
        isEaten={isEaten}
      />
    )
  })

  return (
    <div className="belt">
      {sushiComponent}
      <MoreButton onClickMore={onClickMore} />
    </div>
  );
}

export default SushiContainer;
