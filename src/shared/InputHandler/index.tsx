import React from "react";

import { useField } from "formik";
import { TextField } from "@mui/material";

const InputHandler = (props: any) => {
  const [field] = useField(props);

  //   return <TextField className="w-full" {...props} {...field} />;
  return (
    <div className="flex flex-col gap-2 w-full">
      {props.label && (
        <p className="font-bold text-dark text-lg md:text-xl">{props.label}</p>
      )}
      <input
        {...props}
        {...field}
        className="
        border-none bg-[#eff3f4] rounded-md w-full min-h-[60px]
        text-dark font-medium px-4 placeholder:text-dark outline-none"
      />
    </div>
  );
};

export default InputHandler;
