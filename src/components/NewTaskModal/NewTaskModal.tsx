import React, { useState } from "react";

import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import InputHandler from "../../shared/InputHandler";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { createTask, editTask } from "../../app/todosSlice";
import { TaskType } from "../../types";
import { CloseRounded } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 720,
  width: "95%",
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
  p: 4,
};

type NewTaskModalProps = {
  onClose: Function;
  taskData?: TaskType;
};

const NewTaskModal = ({ onClose, taskData }: NewTaskModalProps) => {
  const [dueDate, setDueDate] = useState<Dayjs | null>(dayjs(new Date()));
  const dispatch = useDispatch();

  const initialValues: TaskType = taskData || {
    title: "",
    dueDate: new Date(),
    description: "",
    id: Math.floor(Math.random() * 101267300),
    status: "todo",
    completed: false,
  };

  const handleTaskSubmit = (values: TaskType) => {
    const newValues = {
      ...values,
      dueDate: dueDate?.toDate().toDateString(),
    };

    if (taskData) {
      dispatch(editTask(newValues));
    } else {
      dispatch(createTask(newValues));
    }
    onClose();
  };

  const TaskModalHeader = () => {
    return (
      <div className="mb-6 w-full flex items-center justify-between">
        <p className="text-xl md:text-2xl text-dark font-semibold">
          {taskData ? `Edit Task: ${taskData.id}` : "New Task To-Do 🥰"}
        </p>
        <div onClick={() => onClose()}>
          <CloseRounded className="cursor-pointer" />
        </div>
      </div>
    );
  };

  return (
    <Box sx={style}>
      <Formik initialValues={initialValues} onSubmit={handleTaskSubmit}>
        {(props) => (
          <Form className="flex flex-col gap-[24px] justify-start items-start">
            <TaskModalHeader />
            <InputHandler
              className="w-full"
              name="title"
              id="filled-basic"
              label="Task Title ✅"
              variant="outlined"
              placeholder="Add Task Name..."
            />
            <InputHandler
              className="w-full"
              name="description"
              id="filled-basic"
              variant="outlined"
              label="Description 🤔"
              placeholder="Add Description..."
            />
            <div className="w-full">
              <p className="mb-2 font-bold text-dark text-lg md:text-xl">
                Due Date
              </p>
              <DatePicker
                className="w-full border-none"
                value={dueDate}
                onChange={(e: any) => {
                  setDueDate(dayjs(e));
                }}
              />
            </div>
            <button
              className="hover:bg-slate-400 transition-colors shadow-none w-full min-h-[60px] rounded-lg bg-blue text-white font-bold text-xl"
              type="submit"
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default NewTaskModal;
