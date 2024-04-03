import React from 'react'

export default function EventHandling() {

    function handleButtonClick(name){
        console.log(name)
        console.log("Hey! The button was clicked")
    }

    function handleButtonFocus(){
        console.log("Button was focused")
    }

  return (
    <div>
        <button onClick={()=>{
            handleButtonClick("arjit")
        }} onMouseEnter={handleButtonFocus} >Dont Click Me</button>
    </div>
  )
}
