import React from "react";

export default function BookItem({book}) {
  // console.log("Props in BookItem",props)
  return (
    <div>
      <p>Book Name : {book.name}</p>
      <p>Author : {book.author}</p>
      <p>Published : {book.year}</p>
    </div>
  );
}


// let book = {
//   name :"sadfasd",
//   year : 1232
// }

// let {name,year} = book