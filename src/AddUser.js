import React, { useEffect } from 'react'

export default function AddUser() {

    const url = "https://661f4c9616358961cd93f83d.mockapi.io/api/v1/users";

    const userToAdd = {
        name : "Arjit",
        email:'arjit@gmail.com',
        avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg"
    }

    useEffect(()=>{
        // addUser()
        deteleUser()
    },[])

    async function addUser(){
        let res = await fetch(url,{
            method:'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(userToAdd)
        })

        let data  = await res.json()
        console.log("Data from api", data)
    }

    async function deteleUser(){
        let res = await fetch(url+'/1',{
            method:'DELETE'
        })

        let data = await res.json()
        console.log(data)
    }

  return (
    <div>

    </div>
  )
}
