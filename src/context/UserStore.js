import React, { useState } from "react";
import UserContext from "./UserContext";

export default function UserStore({ children }) {
  const [user, setUser] = useState(null);

  function loginUser(email, password) {
    if (email === "arjit@gmail.com" && password === "Hello@1234") {
      setUser({
        name: "Arjit",
        email: "arjit@gmail.com",
      });

      return true
    } else {
      return false
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
}
