import React, { useState } from "react"

function SushiWallet({ onAddMoney }) {
   // set state variable to equal values from form
   const [value, setValue] = useState(0)

   // on submit event, pass value into callback function 'onAddMoney'
   // set value state variable back to zero to reset form field
   function handleSubmit(event) {
      event.preventDefault()
      onAddMoney(value)
      setValue(0)
   }

   // on change in form field, parse string into integer
   // set value variable state using value of field form
   function handleChange(event) {
      const value = parseInt(event.target.value, 10)
      setValue(value)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type="number" value={value} onChange={handleChange} /> 
         <button type="submit">Add $ to budget</button>
      </form>
   )
}

export default SushiWallet