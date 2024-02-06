import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import EmptyImage from "../../assets/720x400.png";
import {
  FaFacebook,
  FaFacebookF,
  FaHeart,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDataInit } from "../../store/features/ProductsSlice";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
function ProductInfo() {
  const { loading, singleProductData } = useSelector(
    (state) => state.ProductsSlice
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProductDataInit({ uid: id }));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {loading ? (
        <div className="h-[400px]">
          <Loader />
        </div>
      ) : (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-32 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2  w-full lg:h-auto  md:h-[400px]   rounded"
                src={singleProductData?.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {singleProductData?.title?.split(" ")?.[0]}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {singleProductData?.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                    <FaRegStar className="text-yellow-500" />

                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500 px-1">
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a className="text-gray-500 px-1">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a className="text-gray-500 px-1">
                      <AiFillMessage className="w-5 h-5" />
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {singleProductData?.description}
                </p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900 ">
                    PKR{" "}
                    {Math.floor(singleProductData?.price).toLocaleString(
                      "en-US"
                    )}
                  </span>

                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default ProductInfo;