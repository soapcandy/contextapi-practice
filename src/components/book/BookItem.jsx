import "../../styles/BookList.css";

function BookItem({ book }) {
  return (
    <div className="book-item">
      <div className="book-item-title">제목: {book.title}</div>
      <div className="book-item-author">저자: {book.author}</div>
      <div className="book-item-content">내용: {book.content}</div>
    </div>
  );
}
export default BookItem;
