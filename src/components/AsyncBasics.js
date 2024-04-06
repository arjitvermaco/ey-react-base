import React, { useEffect } from "react";

export default function AsyncBasics() {
  // function welcomeUser(){
  //     console.log("Hey!")
  //     console.log("How")
  //     console.log("Are")

  //     setTimeout(()=>{
  //         console.log("Great . To see you!")
  //     },0)

  //     console.log("You!")
  // }

  const myPromise = new Promise((resolve, reject) => {
    let num = 2;

    if (num > 5) {
      resolve("I am successfull");
    } else {
      reject("I failed!");
    }
  });

  useEffect(() => {
    // welcomeUser()
    // myPromise.then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.error(err)
    // })

    // console.log("Great!!")
    callPromise();
  }, []);

  async function callPromise() {
    try {
      let response = await myPromise;
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return <div>AsyncBasics</div>;
}
