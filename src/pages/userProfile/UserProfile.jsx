// src/components/UserProfile.js
import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect,  } from "react";
import { FaUserCircle } from "react-icons/fa";
import { fireDB } from "../../firebase/FirebaseConfig";
import { call } from "redux-saga/effects";

const user = JSON.parse(localStorage.getItem("user"));
const UserProfile = () => {
  const dateObject = new Date(parseInt(user.user.createdAt));
  const formattedDate = dateObject.toLocaleString().split(",");
 
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-center my-4 text-3xl font-bold italic">
        Personal Information
      </h1>
      <div className=" w-full mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div className="flex items-center justify-center mt-4">
          <FaUserCircle className="w-32 h-32 object-cover rounded-full border-4 border-white" />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-semibold text-gray-800">user.name</h2>
        </div>

        <div className="border-t border-gray-300 p-4">
          <p className="text-gray-600">
            <span className="font-semibold">Email:</span> {user.user.email}
          </p>
        </div>
        <div className="border-t border-gray-300 p-4">
          <p className="text-gray-600">
            <span className="font-semibold">Profile Created:</span>{" "}
            {formattedDate[0]}
          </p>
        </div>
        <div className="border-t border-gray-300 p-4">
          <p className="text-gray-600">
            <span className="font-semibold">Email-verify-by-Google:</span> {user.user.emailVerified?" Yes ":" No "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
