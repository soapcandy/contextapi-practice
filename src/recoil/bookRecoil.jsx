import { atom, selector } from "recoil";

const bookListState = atom({
  key: "bookListState",
  default: [],
});

const bookListStateState = selector({
  key: "bookListStateState",
  get: ({ get }) => get(bookListState),
  set: ({ get, set }, newBook) => {
    set(bookListState, [...get(bookListState), newBook]);
  },
});

export { bookListState, bookListStateState };
