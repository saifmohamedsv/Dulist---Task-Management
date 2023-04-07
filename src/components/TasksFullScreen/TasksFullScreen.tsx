import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import TaskCard from "../TaskCard/TaskCard";

const TasksFullScreen = () => {
  const tasks = useSelector((state: RootState) => state.todos);
  return (
    <div>
      <h1 className="text-5xl text-center my-4 font-semibold text-pink">
        All Tasks
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {tasks?.map((task) => (
          <TaskCard {...task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TasksFullScreen;
