import { Link } from "react-router-dom";
import BookItem from "./BookItem";

function BookList({ addBookList }) {
  return (
    <div>
      <div>이제까지 읽은 책은 {addBookList.length}권 입니다</div>
      {addBookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <Link to={"/add"}>
        <button>추가</button>
      </Link>
    </div>
  );
}

export default BookList;
