import { useState } from "react";
import { Link } from "react-router-dom";
import TOAST from "../../components/toast/Toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { isLoading } from "../../store/features/AppState";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
function SignUp() {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { loading } = useSelector((state) => state.AppStateSlice);
  const dispatch = useDispatch();
  const userRef = collection(fireDB, "users");
  const handleInputData = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setInput({ ...input, ...newInput });
  };

  const SignUp = async () => {
    dispatch(isLoading(true));
    if (input.name === "" || input.email === "" || input.password === "") {
      TOAST.Toast_Error("All fields are required");
      dispatch(isLoading(false));
    } else if (input.password.length < 6) {
      TOAST.Toast_Error("password must me atleast 6 character");
      dispatch(isLoading(false));
    } else {
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          input.email,
          input.password
        );
        await addDoc(userRef, {
          name: input.name,
          id: users.user.uid,
          email: users.user.email,
          password: input.password,
          time: Timestamp.now(),
        });
        dispatch(isLoading(false));
        setInput({ name: "", email: "", password: "" });
        TOAST.Toast_Success("SignUp Successfully");
      } catch (error) {
        TOAST.Toast_Error(error.message);
        dispatch(isLoading(false));
      }
    }
  };

  const togglePasswordVisibility = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      {loading && <Loader />}

      <div className=" bg-gray-800 px-10 py-10 rounded-md ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(event) => handleInputData(event)}
            className="  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-sm  outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(event) => handleInputData(event)}
            className="  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-sm  outline-none"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={input.password}
              onChange={(event) => handleInputData(event)}
              className="  px-2 py-2 w-full lg:w-[20em] rounded-sm outline-none pr-10"
              placeholder="Password"
            />
            <span
              onClick={togglePasswordVisibility}
              className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? (
                <BiSolidShow size={20} />
              ) : (
                <BiSolidHide size={20} />
              )}
            </span>
          </div>
        </div>

        <div className=" flex justify-center mb-3">
          <button
            className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-sm"
            onClick={SignUp}
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
