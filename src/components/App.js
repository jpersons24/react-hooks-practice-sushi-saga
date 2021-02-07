import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      setSushi(data)
    })
  }, [])

  // callback function for 'more sushi' button click
  // life cycle: App -> SushiContainer -> MoreButton
  function handleMoreBtnClick() {
    // modulo opertor allows us to come back to beginning of array once at the end
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushi.length)
  }

  // handle click on individual sushi
  function handleSushiClick(event) {
    console.log(event.target)
  }

  // slice sushi array to only display first 4 sushi objects
  const displayedSushis = sushi.slice(sushiIndex, sushiIndex + 4)

  return (
    <div className="app">
      <SushiContainer 
        sushi={displayedSushis} 
        onClickMore={handleMoreBtnClick} 
        eatSushi={handleSushiClick}
      />
      <Table />
    </div>
  );
}

export default App;
