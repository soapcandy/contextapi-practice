import { useState } from "react";

function InsertBook({ setAddBookList }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const getInsert = () => {
    setAddBookList({ title, author, content });
  };

  return (
    <div>
      <div>
        <div>제목</div>
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
        <div>저자</div>
        <input type="text" onChange={(e) => setAuthor(e.target.value)}></input>
        <div>내용</div>
        <input
          type="text"
          onChange={(e) => setContent(e.target.value)}
          style={{ height: "100px" }}
        ></input>
      </div>
      <button onClick={getInsert}>제출</button>
    </div>
  );
}
export default InsertBook;
