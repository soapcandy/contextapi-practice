import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/book/BookList";
import BookInsert from "./components/insert/BookInsert";
import "./App.css";
import { BookProvider } from "./components/contexts/BookContextAPI";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">읽은 책 목록</header>
      <div className="app-content">
        <BrowserRouter>
          <BookProvider>
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/add" element={<BookInsert />} />
            </Routes>
          </BookProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
