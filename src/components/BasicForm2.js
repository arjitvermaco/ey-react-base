import React, { useState } from "react";

export default function BasicForm2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("Username", username)
    // console.log("Password",password)
    let newEntry = {
      username: username,
      password: password,
    };
    console.log(newEntry);
    setList([...list, newEntry]);
  }
  return (
    <div>
      <h3>Username value : {username}</h3>
      <h3>Pass value : {password}</h3>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
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
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Entries</h3>
      {list.map((item) => {
        return (
          <div key={item.username}>
            <p>{item.username}</p>
            <p>{item.password}</p>
          </div>
        );
      })}
    </div>
  );
}
