import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookInput from "./BookInput";

function InsertBook({ addBook, addBookList }) {
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    content: "",
  });

  const { title, author, content } = inputs;
  const navigate = useNavigate();

  const getInsert = () => {
    const newBook = {
      id: addBookList.length,
      title,
      author,
      content,
    };
    addBook(newBook);
    navigate("/");
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
      <BookInput name="제목" value={title} onChange={onChange} />
      <BookInput name="저자" value={author} onChange={onChange} />

      <div>내용</div>
      <input
        name="content"
        type="text"
        onChange={onChange}
        value={content}
        style={{ height: "100px" }}
      ></input>
      <div>
        <button onClick={getInsert}>제출</button>
      </div>
    </div>
  );
}
export default InsertBook;
