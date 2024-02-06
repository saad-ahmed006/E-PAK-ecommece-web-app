import React from "react";
import { useSelector } from "react-redux";
import DeveloperImage from "../../assets/developer.jpeg";
import ReactImage from "../../assets/react.svg";
import FemaleIconImage from "../../assets/femaleIcon.png";
function Testimonial() {
  const { mode } = useSelector((state) => state.AppStateSlice);
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 md:px-0 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-[#FCC50B]">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-fill rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={DeveloperImage}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  {" "}
                  Syed Saad's meticulous attention to detail and innovative
                  problem-solving skills have significantly elevated the quality
                  of our projects. His ability to seamlessly navigate complex
                  coding challenges showcases his expertise and passion for the
                  craft.Their dedication to excellence in software development
                  is truly commendable.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#FCC50B] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#FCC50B" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Syed Muhammad Saad
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={FemaleIconImage}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Laiba brings a unique blend of creativity and technical
                  proficiency to the team. His coding prowess and commitment to
                  delivering top-notch solutions have consistently exceeded
                  expectations. Hasnain's collaborative spirit and effective
                  communication make him a valuable asset to any software
                  development endeavor.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#FCC50B] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#FCC50B" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={ReactImage}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  "React.js has been a transformative force in our development
                  journey. Its component-based structure not only streamlines
                  our coding process but also enhances code organization and
                  maintainability. The virtual DOM and efficient rendering
                  ensure optimal performance, providing our users with a
                  seamless and responsive interface. "
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#FCC50B] mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#FCC50B" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
