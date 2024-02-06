import React from "react";
const UserProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return Navigate("/login");
  }
};
export default UserProtectedRoute;
