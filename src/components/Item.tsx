import { useState } from "react";
import Form from "./Form";
import IItem from "../Interfaces";

interface IItemParams {
  dispatch: Function;
  payload: object;
  todoItem: IItem;
}

const Item = ({ dispatch, payload, todoItem }: IItemParams) => {
  const [edit, setEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todoItem.title);

  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: payload });
  };
  const handleToggleCompletion = () => {
    dispatch({ type: "CHECK", payload: payload });
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  const todoList = () => {
    return (
      <div>
        <form id={`todoListItemForm${todoItem.id}`}>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={handleToggleCompletion}
            name="todoListItem"
            id={`todoListItem${todoItem.id}`}
          />
          <label htmlFor={`todoListItem${todoItem.id}`}>{todoItem.title}</label>
          <button type="button" onClick={handleEdit}>
            EDIT
          </button>
          <button
            type="button"
            disabled={!todoItem.completed}
            onClick={handleDelete}
          >
            DELETE
          </button>
        </form>
      </div>
    );
  };

  const editMode = () => {
    return (
      <Form
        state={updatedTitle}
        setState={setUpdatedTitle}
        type="SAVE"
        payload={{
          updatedTitle: updatedTitle,
          id: todoItem.id,
        }}
        dispatch={dispatch}
        button="SAVE"
        edit={edit}
        setEdit={setEdit}
      />
    );
  };
  return <>{edit ? editMode() : todoList()}</>;
};

export default Item;
