import IItem from "./Interfaces";
interface IPayload {
  title: string;
  id: number;
  updatedTitle: string;
  editState: boolean;
}

interface IAction {
  payload: IPayload;
  type: string;
}

const reducer = (state: Array<IItem>, action: IAction): Array<IItem> => {
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
    case "SAVE":
      return state.map((thisState) =>
        thisState.id == action.payload.id
          ? {
              ...thisState,
              title: action.payload.updatedTitle,
            }
          : thisState
      );
    default: {
      throw Error("Unknown Action: " + action.type);
    }
  }
};
export default reducer;
