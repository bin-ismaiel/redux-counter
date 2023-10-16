import { createStore } from "redux";

const INIT_STATE = { counter: 0, show: true };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "toggle":
      return { ...state, show: !state.show };
    default:
      return state;
  }
};

export const store = createStore(reducer);
