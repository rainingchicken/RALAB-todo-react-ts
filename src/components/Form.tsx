import { FormEvent } from "react";

interface Parameters {
  state: string;
  setState: Function;
  dispatch: Function;
  type: string;
  payload: object;
  button: string;
}

const Form = ({
  state,
  setState,
  dispatch,
  type,
  payload,
  button,
}: Parameters) => {
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch({
      type: type,
      payload: payload,
    });
  };

  const handleChange = (e: FormEvent): void => {
    setState((e.target as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state} onChange={handleChange} />
      <button>{button}</button>
    </form>
  );
};

export default Form;
