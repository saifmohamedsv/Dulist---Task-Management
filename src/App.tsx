import React from "react";
import { Container } from "@mui/material";

import { Header, TasksList } from "./components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Route, Routes } from "react-router-dom";
import TasksFullScreen from "./components/TasksFullScreen/TasksFullScreen";

function App() {
  const todos = useSelector((state: RootState) => state.todos);

  const todoTasks = todos?.filter((todo) => !todo.completed);
  const compeltedTasks = todos?.filter((todo) => todo.completed);

  const HomeScreen = () => (
    <>
      <TasksList title="Todo" tasksCount={todoTasks.length} tasks={todoTasks} />
      <TasksList
        title="Completed"
        tasks={compeltedTasks}
        tasksCount={compeltedTasks.length}
      />
    </>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="min-h-screen bg-[#f4f7fc]">
        <Container>
          <Header />
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<TasksFullScreen />} path="/tasks" />
          </Routes>
        </Container>
      </div>
    </LocalizationProvider>
  );
}

export default App;
