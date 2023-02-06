import React, { useState } from "react";
import BookItem from "./BookItem";
const BookList = () => {
  const [bookName, setBookName] = useState();
  const [bookPrice, setBookPrice] = useState();
  const [bookList, setBookList] = useState([]);

  // useEffect(() => {}, [bookList]);

  const addNewBook = () => {
    if (bookList.some((book) => book.name === bookName)) {
    } else {
      const newBook = {
        name: bookName,
        price: bookPrice,
        id: Math.floor(Math.random() * (9999 - 1) + 1),
      };
      setBookList([newBook, ...bookList]);
    }
  };
  const deleteBook = (e) => {
    const newList = bookList.filter((book) => book.id !== +e.target.id);
    setBookList(newList);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>name</label>
          <input
            type="text"
            // value={bookName}
            placeholder="Add name"
            onChange={(e) => {
              setBookName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>price</label>
          <input
            type="number"
            // value={bookPrice}
            step="0.01"
            placeholder="Add price"
            onChange={(e) => {
              setBookPrice(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit" onClick={addNewBook}>
          Add
        </button>
      </form>
      {bookList.length > 0 ? (
        <ul>
          {bookList.map(({ name, price, id }) => (
            <BookItem
              key={id}
              name={name}
              price={price}
              id={id}
              deleteBook={deleteBook}
            />
          ))}
        </ul>
      ) : (
        <h1>Lista książek jest pusta</h1>
      )}
    </div>
  );
};

export default BookList;
