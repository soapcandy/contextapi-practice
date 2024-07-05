import BookItem from "./BookItem";

function BookList() {
  const test = [
    {
      id: 1,
      title: "boo1",
      author: "man1",
      content: "conte1",
    },
    {
      id: 2,
      title: "boo2",
      author: "man2",
      content: "conte2",
    },
  ];

  return (
    <div>
      <div>이제까지 읽은 책은 {test.length}권 입니다</div>
      {test.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
