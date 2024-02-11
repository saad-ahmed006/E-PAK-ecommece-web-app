import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Carasoul_Img_1 from "../../assets/carasoul-img-1.jpg";
import Carasoul_Img_2 from "../../assets/carasoul-img-2.jpg";
import Carasoul_Img_3 from "../../assets/carasoul-img-3.jpg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1260px]  mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >
        <div>
          <img
            src={Carasoul_Img_1}
            className="aspect-[16/10] md:aspect-auto h-[400px]"
          />
        </div>

        <div>
          <img
            src={Carasoul_Img_2}
            className="aspect-[16/10] md:aspect-auto object-center h-[400px]"
          />
          <div className="text-black absolute top-16 left-5 md:flex md:flex-row  h-full hidden ">
            <div className="flex flex-col text-left ">
              <h1 className="text-[#EB491F] text-5xl font-bold italic">
                E-PAK
              </h1>
              <h1 className="text-[#EB491F] text-5xl font-bold mt-8 italic">
                Online
              </h1>
              <h1 className="text-[#EB491F] text-6xl font-bold  italic">
                Shopping
              </h1>
              <Link to={'/about'}>
              <button className="bg-white text-[#EB491F] font-bold text-2xl left-0 w-[200px] mt-12 py-3 ">
                See More
              </button>
              </Link>
            </div>
          </div>

          <div className="text-black absolute top-16 right-14 md:flex md:flex-col hidden text-left">
            <h1 className="text-[#EB491F] text-6xl font-bold italic">Enjoy </h1>
            <h1 className="text-[#EB491F] text-5xl font-bold mt-2 italic">
              The{" "}
            </h1>
            <h1 className="text-[#EB491F] text-6xl font-bold mt-2 italic">
              {" "}
              Shopping{" "}
            </h1>
          </div>
        </div>

        <div>
          <img
            src={Carasoul_Img_3}
            className="aspect-[16/10] md:aspect-auto object-center h-[400px] relative"
          />

          <div className="text-black absolute top-16 left-5 md:flex md:flex-row  h-full hidden">
            <div className="flex flex-col text-left ">
              <h1 className="text-[#EB491F] text-5xl font-bold italic">
                E-PAK
              </h1>
              <h1 className="text-[#EB491F] text-5xl font-bold mt-8 italic">
                Online
              </h1>
              <h1 className="text-[#EB491F] text-6xl font-bold  italic">
                Shopping
              </h1>
              <button className="bg-white text-[#EB491F] font-bold text-2xl left-0 w-[200px] mt-12 py-3 ">
                See More
              </button>
            </div>
          </div>

          <div className="text-black absolute top-16 right-14 md:flex md:flex-col hidden text-left">
            <h1 className="text-white text-6xl font-bold italic">Enjoy </h1>
            <h1 className="text-white text-5xl font-bold mt-2 italic">The </h1>
            <h1 className="text-white text-6xl font-bold mt-2 italic">
              {" "}
              Shopping{" "}
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
