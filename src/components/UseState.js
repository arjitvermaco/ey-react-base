import React ,{useState} from "react";

export default function UseState() {
    let [myName,setMyName] = useState("Arjit")
    
    //   let num1 = 10;
    //   let num2 = 20;
    
    //   let sum = num1 + num2;

    //Hooks -
    // useState 
  const [number1,setNumber1] = useState(20)
  const [number2,setNumber2] = useState(50)

  function changeNumbers() {

    setNumber1(200)
    setNumber2(300)

    // num1 = 50;
    // num2 = 100;
    // console.log("Updated values of num1 and num2", num1, num2);
  }

  return (
    <div>
      {/* <p>Num1 : {num1}</p>
      <p>Num2 : {num2}</p>
      <p>Sum : {sum}</p> */}
      <p>Number1 : {number1}</p>
      <p>Number2 : {number2}</p>
      <p>Sum : {number1 +number2}</p>
      <p>Name : {myName}</p>
      <button onClick={changeNumbers}>Change Number</button>
      <button onClick={()=>{setMyName("Arjit verma")}}>Change Name</button>
    </div>
  );
}
