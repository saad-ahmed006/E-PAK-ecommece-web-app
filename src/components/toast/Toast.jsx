import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TOAST = {
  Toast_Success: (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  },
  Toast_Error: (text) => {
    toast.error(text, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  },
};

export default TOAST;
