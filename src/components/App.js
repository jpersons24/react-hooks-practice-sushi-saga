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
    // if wallet amount is greater than or eqal to the price of the eatenSushi
    if (wallet >= eatenSushi.price) {
      // map through sushi state variable looking for matching id to eatenSushi id
      const updatedSushi = sushi.map((sushi) => {
        // if a sushi id is equal to the eaten sushi id
        if (sushi.id === eatenSushi.id) {
          // set that sushi's eaten key value equal to true
          return {...sushi, eaten: true}
        }
        // return sushi
        return sushi
      })
      // set sushi state variable equal to the updated sushi variable equal to above logic
      setSushi(updatedSushi)
      // set wallet variable equal previous value minues the price of the eaten sushi
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      // if wallet is less than eaten sushi price, alert the user that they need more money
      alert("You need more money to buy that sushi. Add some money to your wallet!")
    }
  }

  // when form is submitted, value of form field is passed back as argument 'moreMoney'
  // us logic to add 'moreMoney' to wallet state variable being displayed on page
  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney)
  }

  // slice sushi array to only display first 4 sushi objects
  const displayedSushis = sushi.slice(sushiIndex, sushiIndex + 4)
  
  // set variable to pass too Table component, that displays plates on table of eaten sushis
  const eatenSushi = sushi.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi}
        displayedSushis={displayedSushis}
        onClickMore={handleMoreBtnClick} 
        onEatSushi={handleEatSushi}
      />
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={eatenSushi} />
    </div>
  );
}

export default App;
