import Item from "./Item";

const TodoList = ({ dispatch, type, payload, todoItem }) => {
  
  return (
    <>
    { const partyList = party.map((member) => {
    return (
      <Item key={member.name} member={member} dispatch={dispatch} />
    );
  })}
    </>
  );
};

export default TodoList;
