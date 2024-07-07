import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/book/BookList";
import BookInsert from "./components/insert/BookInsert";
import { useEffect, useState } from "react";
import "./App.css";

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
    <div className="app-container">
      <header className="app-header">읽은 책 목록</header>
      <div className="app-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BookList addBookList={addBookList} />} />
            <Route
              path="/add"
              element={
                <BookInsert addBook={addBook} addBookList={addBookList} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
