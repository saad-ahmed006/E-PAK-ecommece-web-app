import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PayImage from "../../assets/pay.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const { mode } = useSelector((state) => state.AppStateSlice);

  return (
    <footer
      className="text-gray-600 body-font bg-gray-300"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/'}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/order'}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order
                </Link>
              </li>
              <li>
                <Link to={'/cart'}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Cart
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/returnpolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src={PayImage} alt="" />
          </div>
        </div>
      </div>

      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
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
          <p
            className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            © 2023 E-Pak —
            <a
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              www.epak.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaInstagramSquare className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-500">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
