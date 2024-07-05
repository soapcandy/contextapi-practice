function BookItem({ book }) {
  return (
    <div>
      <div>----------------</div>
      <div>제목: {book.title}</div>
      <div>저자: {book.author}</div>
      <div>내용: {book.content}</div>
    </div>
  );
}

export default BookItem;
