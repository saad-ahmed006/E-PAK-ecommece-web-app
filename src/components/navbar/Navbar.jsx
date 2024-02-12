import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCloudSunFill, BsPersonCircle } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import PakistanFlag from "../../assets/pakistanflag.png";
import { handleColorMode } from "../../store/features/AppState";
import { useDispatch, useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi2";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { GrUserAdmin } from "react-icons/gr";
import { getCartProductSuccess } from "../../store/features/CartSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { mode } = useSelector((state) => state.AppStateSlice);
  const { cart } = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  // const userColorModeRef = collection(fireDB, "mode");
  const toggleMode = () => {
    if (mode === "light") {
      dispatch(handleColorMode("dark"));
    } else {
      dispatch(handleColorMode("light"));
    }
  };

  const Logout = () => {
    dispatch(getCartProductSuccess());
    localStorage.clear("user");
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="bg-white sticky top-0 z-50  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>

                {!(user?.user?.email === "admin@gmail.com") && user ? (
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <Link
                      to={"/userprofile"}
                      className="text-sm font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      <BsPersonCircle className="text-2xl " />
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {user?.user?.email === "admin@gmail.com" ? (
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    <Link
                      to={"/userprofile"}
                      className="text-sm font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      <GrUserAdmin className="text-2xl " />
                    </Link>
                  </div>
                ) : (
                  ""
                )}

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>

                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                    <div className="flow-root">
                     
                    </div>
                    <div className="flow-root">
                      <Link
                        to={"/contact"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Contact
                      </Link>
                    </div>
                  {user?.user?.email === "admin@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <div className="flow-root" onClick={Logout}>
                      <a
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {!user ? (
                    <div className="flow-root">
                      <Link
                        to={"/login"}
                        className="text-sm font-medium text-gray-700 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Login
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <div className="-m-2 flex items-center p-2">
                    <img
                      src={PakistanFlag}
                      alt=""
                      className="block h-auto w-10 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Pak
                    </span>
                    <span className="sr-only">, change currency</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-[#FCC50B] px-4 text-sm font-medium text-black sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over Rs 300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>

                <MdMenu className="w-5 h-5" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      E-Pak
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}
                   
                   <Link
                      to={"/contact"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Contact
                    </Link>
                  {user?.user?.email === "admin@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}
                  {user ? (
                    <p
                      onClick={Logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </p>
                  ) : (
                    ""
                  )}

                  {!user ? (
                    <Link
                      to={"/login"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Login
                    </Link>
                  ) : (
                    ""
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <div className="flex items-center text-gray-700 ">
                    <img
                      src={PakistanFlag}
                      alt=""
                      className="block h-auto w-10 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      PAK
                    </span>
                  </div>
                </div>

                {!(user?.user?.email === "admin@gmail.com") && user ? (
                  <>
                    <Link to={"/userprofile"}>
                      <div className="hidden lg:ml-8 lg:flex">
                        <BsPersonCircle
                          className="text-2xl"
                          cursor={"pointer"}
                        />
                      </div>
                    </Link>
                  </>
                ) : (
                  ""
                )}

                {user?.user?.email === "admin@gmail.com" ? (
                  <>
                    <Link to={"/userprofile"}>
                      <div className="hidden lg:ml-8 lg:flex">
                        <GrUserAdmin className="text-2xl" cursor={"pointer"} />
                      </div>
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <HiShoppingCart className="w-6 h-6" />

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cart?.length && cart?.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
