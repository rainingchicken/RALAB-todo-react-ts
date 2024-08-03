# R-ALAB 320H.9.1 - Building a Todo List

RALAB-todo-react-ts

## Requirements

1. A heading labeling it as a "todo list."
   - `<h1>Todo List</h1>`
2. A list of "todo" items, which are strings listing activities to be accomplished (e.g. "find that missing sock"). Each "todo" item should have:

   1. A checkbox next to it which indicates whether it is "complete."
      ```js
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={handleToggleCompletion}
        name="todoListItem"
        id={`todoListItem${todoItem.id}`}
      />
      ```
   2. A "delete" button next to it which removes it from the list.
      1. The "delete" button should be disabled unless the todo is complete!
         ```js
         <button
           type="button"
           disabled={!todoItem.completed}
           onClick={handleDelete}
         >
           DELETE
         </button>
         ```
   3. An "edit" button that replaces the todo string with a text input used to edit the todo.

      ```js
      <button type="button" onClick={handleEdit}>
        EDIT
      </button>
      ```

      1. Hint: bind the value of this text input to a piece of state so that it is always accurate, even when first displayed!
      2. When this text input is active, the "delete" and "edit" buttons should be hidden, and a "save" button should appear. The "save" button should save any changes made to the todo within the text input.

         ```js
         {
           edit ? editMode() : todoList();
         }
         ```

3. An input element that creates new todo items and adds them to the list.
   ```js
   <form name={`inputForm${type}`} onSubmit={handleSubmit}>
     <input type="text" value={state} onChange={handleChange} />
     <button>{button}</button>
   </form>
   ```
4. New todos should be added to the top of the list visually; the oldest todos should be at the bottom.
   - yes :)

## Credits

- https://venngage.com/blog/blue-color-palettes/
- https://fonts.google.com/specimen/Patrick+Hand+SC

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
