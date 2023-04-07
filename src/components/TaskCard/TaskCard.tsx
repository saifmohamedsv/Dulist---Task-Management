import React, { useState } from "react";

import BpCheckbox from "../../shared/CustomCheckBox";
import { TaskType } from "../../types";
import { useDispatch } from "react-redux";
import { editTask, removeTask, toggleTask } from "../../app/todosSlice";
import { Modal } from "@mui/material";
import NewTaskModal from "../NewTaskModal/NewTaskModal";
import { DeleteRounded, EditRounded } from "@mui/icons-material";

const TaskCard = (props: TaskType) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleCompleteTask = (taskID: number) => {
    dispatch(toggleTask({ id: taskID }));
  };

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <div>
      <div className="w-full curso-pointer transition-shadow duration-500 hover:shadow-md border-l-[4px] md:border-l-[7px] bg-white border-pink rounded-lg md:rounded-xl px-2 md:px-4 py-4 md:py-6 flex flex-col">
        <div className="flex justify-between items-center pb-2 border-b-2 border-[#e5e5e5]">
          <div className="w-full flex flex-col gap-1">
            <p
              className={`text-text_dark font-bold text-lg md:text-xl ${
                props.completed && "line-through"
              }`}
            >
              {props.title}
            </p>
            <p className="text-text_dark text-sm md:text-md">
              {props.description}
            </p>
          </div>

          <div>
            <BpCheckbox
              onChange={() => handleCompleteTask(props.id)}
              defaultChecked={props.completed}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-text_dark text-sm md:text-md">
            <span className="text-red-500">Deadline:</span> {props.dueDate}
          </p>
          <div className="flex gap-2">
            <EditRounded
              className="cursor-pointer"
              onClick={handleShowEditModal}
              color="action"
            />
            <DeleteRounded
              className="cursor-pointer"
              onClick={() => dispatch(removeTask({ id: props.id }))}
              color="error"
            />
          </div>
        </div>
      </div>
      <div>
        {showEditModal && (
          <Modal
            open={showEditModal}
            onClose={handleCloseEditModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <NewTaskModal taskData={props} onClose={handleCloseEditModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

// Inspired by blueprintjs

export default TaskCard;
