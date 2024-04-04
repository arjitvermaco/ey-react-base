import React, { useState } from "react";

export default function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  //New state for validation errors
  const [formErrors,setFormErrors] = useState({})

  const handleChange = (event)=>{
    // console.log(event.target.name)
    // console.log(event.target.value)
    let itemKey = event.target.name;
    let value = event.target.value
    setFormData(
        {...formData,[itemKey]:value}
    )
  }

  const validateForm = ()=>{
    let errors = {}
    if(!formData.username){
        errors.username = "Username is required!"
    }
    if(!formData.password){
        errors.password = "Password is required!"
    }else if(formData.password.length <6){
        errors.password = "Password must be of 6 characters long"
    }
    return errors
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let err = validateForm()

    if(err.username || err.password){
        setFormErrors(err)
    }

  }
  return (
    <div>
      <h3>Username value : {formData.username}</h3>
      <h3>Pass value : {formData.password}</h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            
          />
          {formErrors.username ? <p className="formErrr">{formErrors.username}</p>:""}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            
          />
            {formErrors.password ? <p className="formErrr">{formErrors.password}</p>:""}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
