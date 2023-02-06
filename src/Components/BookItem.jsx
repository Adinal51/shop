import React from "react";
const BookItem = ({ name, price, id, deleteBook }) => {
  return (
    <li>
      <h1>{name}</h1>
      <span>{price}</span>
      <button onClick={deleteBook} id={id}>
        Remove
      </button>
    </li>
  );
};

export default BookItem;
