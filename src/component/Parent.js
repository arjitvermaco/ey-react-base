import React from 'react'

export default function Parent({children}) {
    const dataToSend = {
        message: "Hello from Parent",
        isLoggedIn: true
      };
  return (
    <div>
        <header className='bg-blue-500 h-14'>THis is a header</header>

        <div className='flex'>

        <aside className='w-1/5 bg-slate-600 min-h-[100vh]'>This is a sidebar</aside>

        {React.Children.map(children,child => React.cloneElement(child,{...dataToSend}))}
        </div>

    </div>
  )
}
