import { useNavigate } from "react-router-dom";
import BookItem from "./BookItem";
import "../../styles/BookList.css";
import { useRecoilValue } from "recoil";
import { bookListState } from "../../recoil/bookRecoil";

function BookList() {
  const bookList = useRecoilValue(bookListState);
  const navigate = useNavigate();

  return (
    <div className="book-list-container">
      <div className="book-count">
        이제까지 읽은 책은 {bookList.length}권 입니다
      </div>
      {bookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <button className="add-button" onClick={() => navigate("/add")}>
        추가
      </button>
    </div>
  );
}

export default BookList;
