import { useState, useReducer } from "react";
import initialState from "./initialState";
import Form from "./components/Form";
import reducer from "./todoReducer";
import Item from "./components/Item";

import "./index.css";
import Footer from "./components/Footer";

function App() {
  const [title, setTitle] = useState("");
  const [todo, dispatch] = useReducer(reducer, initialState);

  const todoLists = todo.map((item) => {
    return (
      <Item
        key={item.id}
        todoItem={item}
        dispatch={dispatch}
        payload={{ id: item.id }}
      />
    );
  });
  return (
    <>
      <h1>🌟 Todo List ✏️</h1>
      <Form
        state={title}
        setState={setTitle}
        type="ADD"
        payload={{ title }}
        dispatch={dispatch}
        button="ADD"
      />
      {todoLists}
      <Footer />
    </>
  );
}

export default App;
