import React from "react";
import BookItem from './BookItem'
export default function BookList() {
  let booksData = [
    {
      name: "Dune",
      author: "Frank Herbert",
      year: "1965",
    },
    {
      name: "1984",
      author: "George Orwell",
      year: "1949",
    },
    {
      name: "Foundation",
      author: "Isaac Asimov",
      year: "1951",
    },
    {
      name: "Neuromancer",
      author: "William Gibson",
      year: "1984",
    },
    {
      name: "Ender's Game",
      author: "Orson Scott Card",
      year: "1985",
    },
    {
      name: "Brave New World",
      author: "Aldous Huxley",
      year: "1932",
    },
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      year: "1979",
    },
    {
      name: "The Martian",
      author: "Andy Weir",
      year: "2011",
    },
    {
      name: "Snow Crash",
      author: "Neal Stephenson",
      year: "1992",
    },
    {
      name: "I, Robot",
      author: "Isaac Asimov",
      year: "1950",
    },
  ];
  return (
    <div>
      {booksData.map((book) => {
        return <BookItem book={book} key={book.name} />;
      })}
    </div>
  );
}
// import React from 'react'
// import Dummy from './components/Dummy'

// export default function App() {

//   let numbers = [1,2,3,4,5,6,7,8]

//   let dummyData = "Hey! How are you??"

//   return (
//     // <div>
//     //   {numbers.map((num)=>{
//     //     return <Dummy/>
//     //   })}
//     // </div>

//     <Dummy data={dummyData}/>
//   )
// }
