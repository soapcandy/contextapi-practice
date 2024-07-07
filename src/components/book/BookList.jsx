import { useNavigate } from "react-router-dom";
import BookItem from "./BookItem";

function BookList({ addBookList }) {
  const navigate = useNavigate();

  return (
    <div>
      <div>이제까지 읽은 책은 {addBookList.length}권 입니다</div>
      {addBookList.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <button onClick={() => navigate("/add")}>추가</button>
    </div>
  );
}

export default BookList;
