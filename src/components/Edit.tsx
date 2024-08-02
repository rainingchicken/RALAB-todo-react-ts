import { useState, FormEvent } from "react";

const Edit = ({ todoItem }) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch({
      type: "type",
      payload: payload,
    });
  };

  const handleChange = (e: FormEvent): void => {
    setState((e.target as HTMLInputElement).value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoItem.title} onChange={handleChange} />
        <button>Save</button>
      </form>
    </>
  );
};

export default Edit;
