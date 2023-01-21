import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {}, [list]);

  const addNewBook = () => {
    if (name.length <= 4) {
      return;
    } else {
      const newBook = {
        name: name,
        price: price,
        id: Math.floor(Math.random() * (9999 - 1) + 1),
      };
      setList([newBook, ...list]);
    }
  };
  const deleteBook = (e) => {
    const newList = list.filter((book) => book.id !== +e.target.id);
    setList(newList);
    console.log(newList);
  };
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>name</label>
          <input
            type="text"
            name={name}
            placeholder="Add name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label>price</label>
          <input
            type="number"
            price={price}
            placeholder="Add price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit" onClick={addNewBook}>
          Add
        </button>
      </form>
      {list.length > 0 ? (
        <ul>
          {list.map(({ name, price, id }) => (
            <li key={id}>
              <h1>{name}</h1>
              <span>{price}</span>
              <button id={id} onClick={deleteBook}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Lista książek jest pusta</h1>
      )}
    </div>
  );
}

export default App;

//! jutro dodac validacje , podzielic na komponenty
