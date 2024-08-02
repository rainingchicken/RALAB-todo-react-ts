import { FormEvent } from "react";

interface FormParameters {
  state: string;
  setState: Function;
  dispatch: Function;
  type: string;
  payload: object;
  button: string;
  edit?: boolean; //optional
  setEdit?: Function; //optional
}

const Form = ({
  state,
  setState,
  dispatch,
  type,
  payload,
  button,
  edit,
  setEdit,
}: FormParameters) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch({
      type: type,
      payload: payload,
    });
    //toggle edit mode
    if (setEdit) setEdit(!edit);
  };

  const handleChange = (e: FormEvent): void => {
    //sets state to value of input
    setState((e.target as HTMLInputElement).value);
  };

  return (
    <form name={`inputForm${type}`} onSubmit={handleSubmit}>
      <input type="text" value={state} onChange={handleChange} />
      <button>{button}</button>
    </form>
  );
};

export default Form;
