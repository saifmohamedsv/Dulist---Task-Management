import React from "react";
import { Box } from "@mui/material";

import TaskCard from "../TaskCard/TaskCard";
import { TaskType } from "../../types";
import { useNavigate } from "react-router-dom";

type TasksListProps = {
  title: string;
  tasksCount: number;
  tasks?: TaskType[];
};

const TasksList = (props: TasksListProps) => {
  return (
    <Box display="flex" flexDirection="column" marginBottom={"120px"}>
      <TasksListHeader {...props} />
      {props.tasksCount ? (
        <Box className="flex pb-4 overflow-scroll w-full mt-4 gap-2 p-2">
          {props.tasks?.map((task) => (
            <div className="w-screen min-w-[280px]">
              <TaskCard key={task.id} {...task} />
            </div>
          ))}
        </Box>
      ) : (
        <NoTasksToDisplay />
      )}
    </Box>
  );
};

const TasksListHeader = (props: TasksListProps) => {
  const navigate = useNavigate();
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <p className="font-semibold text-dark text-lg md:text-2xl ">
        {props.title}
        <span className="text-secondary_dark ml-2">({props.tasksCount})</span>
      </p>
      <p
        onClick={() => navigate({ pathname: "/tasks" })}
        className="hover:text-dark transition-colors cursor-pointer text-blue text-sm md:text-md"
      >
        View More
      </p>
    </Box>
  );
};

const NoTasksToDisplay = () => (
  <Box className="w-full flex items-center justify-center p-4">
    <p className="text-lg md:text-3xl mt-8   text-secondary_dark">
      No Tasks To Show
    </p>
  </Box>
);
export default TasksList;
