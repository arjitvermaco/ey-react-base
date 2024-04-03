import React, { useState } from 'react'

export default function BasicForm() {
    const [emailValue,setEmailValue] = useState("")
    const [passwordValue,setPasswordValue] = useState("")
  return (
    <div>
        <h3>Email value : {emailValue}</h3>
        
        <h3>Pass value : {passwordValue}</h3>

    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input value={emailValue} onChange={(event)=>{
            console.log(event.target.value)
            setEmailValue(event.target.value)
        }} type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input value={passwordValue} onChange={(event)=>{
            setPasswordValue(event.target.value)
        }} type="password" id="password" name="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
