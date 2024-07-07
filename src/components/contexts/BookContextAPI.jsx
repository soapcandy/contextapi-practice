import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [addBookList, setAddBookList] = useState([]);

  const addBook = (book) => {
    setAddBookList([...addBookList, book]);
  };

  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem("books"));
    setAddBookList(getBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(addBookList));
  }, [addBookList]);

  return (
    <BookContext.Provider value={{ addBook, addBookList }}>
      {children}
    </BookContext.Provider>
  );
};
