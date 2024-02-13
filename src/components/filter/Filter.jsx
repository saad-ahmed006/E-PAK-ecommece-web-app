import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
function Filter({
  data,
  searchQuery,
  setSearchQuery,
  filterCategory,
  setFilterCategory,
  handleResetFilters
}) {
  const { mode } = useSelector((state) => state.AppStateSlice);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  useEffect(() => {
    const categories = data?.map((product) => product.category);
    const uniqueCategoriesSet = new Set(categories);
    const uniqueCategories = Array.from(uniqueCategoriesSet);
    setUniqueCategory(uniqueCategories);
  }, [data]);
  return (
    <div>
      <div className=" container mx-auto  mt-5 ">
        <div
          className={`p-5 rounded-lg bg-gray-200 drop-shadow-xl border border-gray-200"
          ${
            (mode === "dark" ? "bg-[#282c34]" : "",
            mode === "dark" ? "bg-[white]" : "")
          }`}
        >
          <div className="flex flex-row justify-between items-star my-3">
            <div>
            <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 ">
              Search Product
            </h1>{" "}
            <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>

            </div>
            <p
              className="text-gray-700 cursor-pointer"
              onClick={() => handleResetFilters()}
            >
              Reset Filters
            </p>
          </div>
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <CiSearch className="w-4 h-4 fill-current text-black" />
            </div>
            <input
              type="text"
              name="searchkey"
              id="searchkey"
              value={searchQuery}
              placeholder="Search here"
              className={`px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm 
              ${mode === "dark" ? "bg-[#424242]" : ""}
              ${mode === "dark" ? "text-white" : ""}
              `}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setFilterCategory("");
              }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value), setSearchQuery("");
              }}
              className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              {uniqueCategory?.map((category, index) => {
                return <option key={index} value={category}>{category}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
