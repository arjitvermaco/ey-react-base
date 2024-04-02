import React from "react";

export default function Conditional() {
  const goalScored = false;

  if(goalScored) return "You scored the goal"

  return (
    <p>You did not score the goal</p>
  )
 
}
