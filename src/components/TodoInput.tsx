const TodoInput = ({ state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };
  return <input type="text" value={state} onChange={handleChange} />;
};

export default TodoInput;
