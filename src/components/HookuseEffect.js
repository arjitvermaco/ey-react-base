import React,{useEffect, useState} from 'react'

export default function HookuseEffect() {

 //Making a api call
 //Settting a timer
    const [state1,setState1] = useState("State1")
    const [state2,setState2] = useState("State2")


//  1 => with no ddp
// Will run when component loads and when any state changes
 useEffect(()=>{
    //run your side effect
    //ex api call or timer 
    //or database sub
    //or db ubsub
    console.log("Type 1 : Use effect is running!!")
 })

//  2 => with empty array 
// Will run only ONCE when the component loads
useEffect(()=>{
    console.log("Type 2 : Use effect is running!!")
},[])

//3 => with state in array
// Will run on component load and when the states in array changes 
useEffect(()=>{
    console.log("Type 3 : Use effect is running!!")
},[state1])

  return (
    <div>
        <h2>State1 : {state1}</h2>
        <h2>State2 : {state2}</h2>

        <button onClick={()=>{setState1("Updated State1")}}>Change State1</button>
        <button onClick={()=>{setState2("Updated State2")}}>Change State2</button>


    </div>
  )
}
