import { useNavigate } from "react-router-dom";
import BookItem from "./BookItem";
import "../../styles/BookList.css";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContextAPI";
function BookList() {
  const { addBookList } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <div className="book-list-container">
      <div className="book-count">
        이제까지 읽은 책은 {addBookList.length}권 입니다
      </div>
      {addBookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <button className="add-button" onClick={() => navigate("/add")}>
        추가
      </button>
    </div>
  );
}

export default BookList;
