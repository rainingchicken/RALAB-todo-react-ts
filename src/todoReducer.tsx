interface IPayload {
  title: string;
  id: number;
}

interface IAction {
  payload: IPayload;
  type: string;
}

interface iItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const reducer = (state: Array<iItem>, action: IAction) => {
  switch (action.type) {
    case "ADD": {
      if (action.payload.title === "") {
        return state;
      }
      return [
        { id: Date.now(), title: action.payload.title, completed: false },
        ...state,
      ];
    }
    case "DELETE":
      return state.filter((thisState) => thisState.id !== action.payload.id);
    case "CHECK":
      return state.map((thisState) =>
        thisState.id == action.payload.id
          ? { ...thisState, completed: !thisState.completed }
          : thisState
      );
    case "EDIT":
      return state.map((thisState) =>
        thisState.id == action.payload.id
          ? { ...thisState, title: action.payload.title }
          : thisState
      );
    default: {
      throw Error("Unknown Action: " + action.type);
    }
  }
};
export default reducer;
