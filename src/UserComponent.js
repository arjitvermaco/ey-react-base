import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./store/UserSlice";

export default function UserComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.userList);

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar}/>
            <h3>{user.name}</h3>
          </div>
        );
      })}

      {/* {users.name} */}
    </div>
  );
}
