import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/book/BookList";
import InsertBook from "./components/insert/InsertBook";
import { useState } from "react";

function App() {
  const [addBookList, setAddBookList] = useState([]);

  console.log(addBookList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route
          path="/add"
          element={<InsertBook setAddBookList={setAddBookList} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
