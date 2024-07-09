import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/book/BookList";
import BookInsert from "./components/insert/BookInsert";
import "./App.css";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">읽은 책 목록</header>
      <div className="app-content">
        <BrowserRouter>
          <RecoilRoot>
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/add" element={<BookInsert />} />
            </Routes>
          </RecoilRoot>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
