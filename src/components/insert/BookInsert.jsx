import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookInput from "./BookInput";
import "../../styles/BookInsert.css";

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
    <div className="book-insert-container">
      <div className="book-input-container">
        <label>제목</label>
        <BookInput name="title" value={title} onChange={onChange} />
      </div>
      <div className="book-input-container">
        <label>저자</label>
        <BookInput name="author" value={author} onChange={onChange} />
      </div>
      <div className="book-content-container">
        <label>내용</label>
        <textarea name="content" onChange={onChange} value={content}></textarea>
      </div>
      <div>
        <button className="submit-button" onClick={getInsert}>
          제출
        </button>
      </div>
    </div>
  );
}
export default InsertBook;
