import React from "react";

const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  // const admin = localStorage.getItem("user");
  if (admin?.user?.email === process.env.VITE_ADMIN_EMAIL) {
    return children;
  } else {
    return Navigate("/login");
  }
};
export default AdminProtectedRoute;
