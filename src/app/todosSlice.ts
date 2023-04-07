import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../types";

const taskSlice = createSlice({
  name: "todos",
  initialState: [] as TaskType[],
  reducers: {
    createTask(state, action: PayloadAction<TaskType>) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        dueDate: action.payload.dueDate,
        status: "todo",
        description: action.payload.description,
        completed: false,
      });
    },
    toggleTask(state, action) {
      const filteredTask = state.find(
        (task) => task.id === action.payload.id
      ) as TaskType;

      filteredTask.completed = !filteredTask.completed;

      filteredTask.status = filteredTask.completed ? "todo" : "completed";
    },
    editTask(state, action) {
      const filteredTask = state.find(
        (task) => task.id === action.payload.id
      ) as TaskType;

      filteredTask.title = action.payload.title;
      filteredTask.dueDate = action.payload.dueDate;
      filteredTask.description = action.payload.description;
    },
    removeTask(state, action) {
      const newState = state.filter((task) => task.id !== action.payload.id);
      state.splice(0, state.length);
      state.push(...newState);
    },
  },
});

export const { createTask, toggleTask, editTask, removeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
