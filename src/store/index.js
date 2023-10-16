import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
const INIT_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter state",
  initialState: INIT_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload.amount;
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
