import { useState } from "react";
import { Link } from "react-router-dom";

function InsertBook({ addBook, addBookList }) {
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    content: "",
  });

  const { title, author, content } = inputs;

  const getInsert = () => {
    const newBook = {
      id: addBookList.length,
      title,
      author,
      content,
    };
    addBook(newBook);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <div>제목</div>
        <input
          name="title"
          type="text"
          onChange={onChange}
          value={title}
        ></input>
        <div>저자</div>
        <input
          name="author"
          type="text"
          onChange={onChange}
          value={author}
        ></input>
        <div>내용</div>

        <input
          name="content"
          type="text"
          onChange={onChange}
          value={content}
          style={{ height: "100px" }}
        ></input>
      </div>
      <Link to={"/"}>
        <button onClick={getInsert}>제출</button>
      </Link>
    </div>
  );
}
export default InsertBook;
