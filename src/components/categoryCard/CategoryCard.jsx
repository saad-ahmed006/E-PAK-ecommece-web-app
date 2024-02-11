import React from "react";
import { Link } from "react-router-dom";
import { BsFillSpeakerFill, BsSmartwatch } from "react-icons/bs";
import { FaLaptop, FaMobile } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function CategoryCard({ CategoryValues }) {
  const { mode } = useSelector((state) => state.AppStateSlice);

  return (
    <>
      {CategoryValues?.map((value, index) => {
        const id = value.toLowerCase();
        return (
          <Link to={`/category/${id}`} key={index}>
            <div className="md:w-[250px] w-[90px] md:h-[120px] h-[100px]  flex flex-col justify-center  items-center mr-7 ">
              <div className="md:w-[250px] w-[90px] md:h-[120px] h-[100px] rounded-md  bg-[#FCC50B] border-y-2 border-black flex flex-row justify-center items-center">
                {value === "Laptop" ? (
                  <FaLaptop size={40} />
                ) : value === "Smart-Watch" ? (
                  <BsSmartwatch size={40} />
                ) : value === "Speaker" ? (
                  <BsFillSpeakerFill size={40} />
                ) : (
                  <FaMobile size={40} />
                )}
              </div>
              <p
                className="font-bold md:text-lg text-xs "
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {value}
              </p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
