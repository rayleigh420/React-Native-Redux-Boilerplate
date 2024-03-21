import { todo } from "@/types/todo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  todos: todo[];
}

const initialState: CounterState = {
  todos: [
    { id: "1", text: "Learn React Native" },
    { id: "2", text: "Work on Todo App" },
    { id: "3", text: "Fix bugs" },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<todo>) => {
      state.todos?.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.todos = state.todos?.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action: PayloadAction<todo>) => {
      console.log("edit");
      state.todos = state.todos?.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, update, remove } = counterSlice.actions;

export default counterSlice.reducer;
