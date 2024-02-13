import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDataInit } from "../../store/features/ProductsSlice";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import Layout from "../../components/layout/Layout";

export default function Category() {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const { mode } = useSelector((state) => state.AppStateSlice);
  const [filterData, setFiterData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDataInit());
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const filteredData = data.filter(
      (item) => item.category.toLowerCase() === id
    );
    setFiterData(filteredData);
  }, [data]);

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font ">
          <div className="container px-5 md:px-0 py-8 md:py-6 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-4">
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 capitalize"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {id}
              </h1>
              <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
            </div>
            <div className="flex flex-wrap md:-m-4 -m-2 ">

          {filterData?.map((item) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <ProductCard
                    title={title}
                    price={price}
                    imageUrl={imageUrl}
                    id={id}
                  />
                );
              })}      
                  </div>
                  </div>
        </section>{" "}
      </Layout>
    </>
  );
}
