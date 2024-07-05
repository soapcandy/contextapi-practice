import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/book/BookList";
import InsertBook from "./components/insert/InsertBook";
import { useEffect, useState } from "react";

function App() {
  const [addBookList, setAddBookList] = useState([]);

  const addBook = (book) => {
    setAddBookList([...addBookList, book]);
  };

  useEffect(() => {
    console.log("useEffect []");
    const getBooks = JSON.parse(localStorage.getItem("books"));
    setAddBookList(getBooks);
  }, []);

  useEffect(() => {
    console.log("useEffect [addBookList]");
    localStorage.setItem("books", JSON.stringify(addBookList));
  }, [addBookList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList addBookList={addBookList} />} />
        <Route
          path="/add"
          element={<InsertBook addBook={addBook} addBookList={addBookList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
