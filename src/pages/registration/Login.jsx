import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoading } from "../../store/features/AppState";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import TOAST from "../../components/toast/Toast";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { GrHide } from "react-icons/gr";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.AppStateSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputData = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setInput({ ...input, ...newInput });
  };

  const Login = async () => {
    dispatch(isLoading(true));
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      localStorage.setItem("user", JSON.stringify(result));
      TOAST.Toast_Success("Login Successfully");
      navigate("/");
      dispatch(isLoading(false));
    } catch (error) {
      TOAST.Toast_Error(error.message);
      dispatch(isLoading(false));
    }
  };

  const togglePasswordVisibility = (e) => {
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
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(event) => handleInputData(event)}
            className="  mb-4 px-2 py-2 w-full lg:w-[20em] rounded-sm  outline-none relative"
            placeholder="Email"
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
            onClick={Login}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-sm relative"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Don't have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
