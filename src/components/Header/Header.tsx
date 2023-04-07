import React, { useState } from "react";
import { Avatar, Box, Button, Modal } from "@mui/material";

import userImage from "@/assets/memoji-eng.png";
import NewTaskModal from "../NewTaskModal/NewTaskModal";
import { AddCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Box className="mb-[24px] md:mb-[48px] md:px-2 py-3 md:py-6 gap-4 flex items-center justify-between">
        <Box
          onClick={() => navigate({ pathname: "/" })}
          className="cursor-pointer flex items-center gap-2"
        >
          <Avatar
            src={userImage}
            sx={{
              width: { md: "76px", xs: "48px" },
              height: { md: "76px", xs: "48px" },
            }}
            className="bg-primary"
          />
          <Box className="flex flex-col">
            <p className="text-secondary_dark font-semibold text-lg md:text-2xl">
              Hello 👋,
            </p>
            <p className="text-dark font-bold text-md md:text-xl">
              Dear Friend 😍
            </p>
          </Box>
        </Box>
        <Box>
          <button
            onClick={() => setShowNewTaskModal(true)}
            className="flex gap-2 items-center border-2 border-primary text-sm md-text-lg rounded-lg px-2 md:px-4 py-2"
          >
            Add New Task
            <AddCircle
              sx={{ color: "#fbe0af", fontSize: { md: "28px", xs: "20px" } }}
            />
          </button>
        </Box>
      </Box>
      <div>
        {showNewTaskModal && (
          <Modal
            open={showNewTaskModal}
            onClose={() => setShowNewTaskModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <NewTaskModal onClose={() => setShowNewTaskModal(false)} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Header;
