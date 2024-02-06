import React from "react";
import { useSelector } from "react-redux";
import { GiShoppingBag } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
function Track() {
  const { mode } = useSelector((state) => state.AppStateSlice);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:px-0 md:py-5  mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <GiShoppingBag className="text-[#FCC50B] w-12 h-12 mb-3 inline-block" />

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100  px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <FaTruck className="text-[#FCC50B] w-12 h-12 mb-3 inline-block" />

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Free Shipping
                </h2>
                <p className="leading-relaxed">
                  We ship all over India for FREE.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <HiMiniCurrencyRupee className="text-[#FCC50B] w-12 h-12 mb-3 inline-block" />

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Exciting Offers
                </h2>
                <p className="leading-relaxed">
                  We provide amazing offers & discounts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
