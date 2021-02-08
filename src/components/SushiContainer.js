import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi, displayedSushis, onClickMore, onEatSushi }) {

  const sushiComponents = displayedSushis.map((sushi) => (
    <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />
  ))

  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={onClickMore} />
    </div>
  );
}

export default SushiContainer;
