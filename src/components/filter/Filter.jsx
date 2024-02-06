import React from "react";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
function Filter({ searchProduct, setSearchProduct }) {
  const { mode } = useSelector((state) => state.AppStateSlice);

  return (
    <div>
      <div className=" container mx-auto  mt-5 ">
        <div
          className={`p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          ${
            (mode === "dark" ? "bg-[#282c34]" : "",
            mode === "dark" ? "bg-[white]" : "")
          }`}
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 ">
            Search Product
          </h1>{" "}
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <CiSearch className="w-4 h-4 fill-current text-black" />
            </div>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              value={searchProduct}
              placeholder="Search here"
              className={`px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm 
              ${mode === "dark" ? "bg-[#424242]" : ""}
              ${mode === "dark" ? "text-white" : ""}
              `}
              onChange={(e) => {
                setSearchProduct(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
