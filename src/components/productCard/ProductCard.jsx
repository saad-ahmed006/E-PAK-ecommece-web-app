import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductCard({ title, price, imageUrl, id }) {
  const { mode } = useSelector((state) => state.AppStateSlice);
  return (
    <>
      <>
        <div
          className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4  drop-shadow-lg "
          key={id}
        >
          <div
            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
            style={{
              backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="flex justify-center cursor-pointer">
              <img
                className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                src={imageUrl}
                alt="blog"
              />
            </div>
            <div className="p-5 border-t-2">
              <h2
                className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                E-Pak
              </h2>
              <h1
                className="title-font text-lg font-medium text-gray-900 mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {title?.slice(0, 25)}...
              </h1>
              <p
                className="leading-relaxed mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                PKR {Math.floor(price).toLocaleString("en-US")}
              </p>
              <Link to={`/productinfo/${id}`}>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black font-bold italic bg-[#FCC50B] hover:bg-[#fcb728] focus:ring-4 focus:ring-purple-300  rounded-lg text-sm w-full  py-2"
                  >
                    More Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ProductCard;
