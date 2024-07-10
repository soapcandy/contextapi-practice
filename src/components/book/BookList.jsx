import { useNavigate } from "react-router-dom";
import BookItem from "./BookItem";
import "../../styles/BookList.css";
import { useRecoilState } from "recoil";
import { bookListState } from "../../recoil/bookRecoil";
import { useEffect } from "react";

function BookList() {
  const [bookList, setBookList] = useRecoilState(bookListState);
  const navigate = useNavigate();

  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem("books"));
    setBookList(getBooks);
    console.log(bookList);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(bookList));
  }, [bookList]);

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
