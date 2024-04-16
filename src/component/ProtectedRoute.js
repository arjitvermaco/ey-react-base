import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }) {
  const userContext = useContext(UserContext);
  console.log(userContext);

  if(!userContext.user){
    return <Navigate to="/" replace />
  }

  return(
    <>
    {/* {children} */}

    <div>
        <header className='bg-blue-500 h-14'>THis is a header</header>

        <div className='flex'>

        <aside className='w-1/5 bg-slate-600 min-h-[100vh]'>This is a sidebar</aside>
        {children}
        {/* {React.Children.map(children,child => React.cloneElement(child,{...dataToSend}))} */}
        </div>

    </div>
    </>
  )
}
