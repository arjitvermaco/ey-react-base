import React, { useState } from "react";

export default function BasicForm3() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleFormSubmit(event) {}
  return (
    <div>
      <h3>Email value : {formData.email}</h3>
      <h3>Pass value : {formData.password}</h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            value={formData.email}
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value });
            }}
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
            onChange={(event) => {
              setFormData({ ...formData, password: event.target.value });
            }}
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
