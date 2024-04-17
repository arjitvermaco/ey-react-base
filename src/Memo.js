import React, { useEffect, useMemo, useState } from "react";

export default function Memo() {
  const [selectedNum, setSelectedNum] = useState(100);
  const [time,setTime] = useState(new Date());

//   const allPrimes = [];

//   for (let counter = 2; counter < selectedNum; counter++) {
//     console.log("First Loop")
//     if (isPrime(counter)) {
//       allPrimes.push(counter);
//     }
//   }

const allPrimes = useMemo(()=>{
    const result = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    console.log("First Loop")
    if (isPrime(counter)) {
        result.push(counter);
    }
  }
   return result 
},[selectedNum])

  useEffect(()=>{
    setInterval(()=>{
        let newTime = new Date()
        setTime(newTime)
    },1000)
  },[])

  console.log(allPrimes);

  return <div>
    Time : {time.toLocaleTimeString()}

    <form>
        <input type="number" value={selectedNum} onChange={(event)=>{
            setSelectedNum(event.target.value)
        }}/>
    </form>
    <p>
        There are {allPrimes.length} primes between 1 and {selectedNum} .
        {allPrimes.map((num)=>{
            return (num + " ,")
        })}
    </p>
  </div>;
}

//Helper function
function isPrime(n) {
    console.log("Second Loop")

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter < n; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }

  return true;
}
