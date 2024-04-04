import React, { useState } from "react";

export default function BasicForm4() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event)=>{
    // console.log(event.target.name)
    // console.log(event.target.value)
    let itemKey = event.target.name;
    let value = event.target.value
    setFormData(
        {...formData,[itemKey]:value}
    )
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form was submitted");
    console.log(formData)

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
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
