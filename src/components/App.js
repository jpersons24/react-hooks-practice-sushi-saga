import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [wallet, setWallet] = useState(100)


  // inital fetch of sushi data
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      // set constat = map of data returned from API
      const updatedSushi = data.map((sushi) => {
        // add eaten key and value to each sushi object and return
        return { ...sushi, eaten: false }
      })
      // set sushi state variable equal to 'updated Sushi' variable
      setSushi(updatedSushi)
    })
  }, [])

  // callback function for 'more sushi' button click
  // life cycle: App -> SushiContainer -> MoreButton
  function handleMoreBtnClick() {
    // modulo opertor allows us to come back to beginning of array once at the end
    setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushi.length)
  }

  // handle click on individual sushi
  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushi = sushi.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true }
        return sushi
      })

      setSushi(updatedSushi)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert("Need more money")
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney)
  }

  // slice sushi array to only display first 4 sushi objects
  const displayedSushis = sushi.slice(sushiIndex, sushiIndex + 4)
  
  const eatenSushi = sushi.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushi={displayedSushis} 
        onClickMore={handleMoreBtnClick} 
        onEatSushi={handleEatSushi}
      />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushi} />
    </div>
  );
}

export default App;
