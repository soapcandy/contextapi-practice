import React from "react";

function BookInput({ name, value, onChange }) {
  return (
    <div>
      <input name={name} type="text" onChange={onChange} value={value}></input>
    </div>
  );
}

export default BookInput;
