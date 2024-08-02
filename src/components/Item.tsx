import { useState } from "react";
import Edit from "./Edit";
import Form from "./Form";

const Item = ({ dispatch, payload, todoItem }) => {
  const [edit, setEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todoItem.title);

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: payload });
  };
  const handleToggleCompletion = () => {
    dispatch({ type: "CHECK", payload: payload });
  };
  const handleEdit = () => {
    dispatch({ type: "EDIT", payload: payload });
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todoItem.completed}
          onChange={handleToggleCompletion}
          name=""
          id=""
        />
        <span>{todoItem.title}</span>
        <button onClick={handleEdit}>EDIT</button>
        <button disabled={!todoItem.completed} onClick={handleDelete}>
          DELETE
        </button>
      </div>{" "}
      <Form
        state={updatedTitle}
        setState={setUpdatedTitle}
        type="EDIT"
        payload={{ title: updatedTitle, id: todoItem.id }}
        dispatch={dispatch}
        button="SAVE"
      />
    </>
  );
};

export default Item;
