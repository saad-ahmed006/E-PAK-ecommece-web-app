import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Wrapper from "../../components/wrapper/Wrapper";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductDataInit } from "../../store/features/ProductsSlice";

export default function AllProducts() {
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const { mode } = useSelector((state) => state.AppStateSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDataInit());
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <section className="text-gray-600 body-font mt-">
          <div className="container px-5 md:px-0 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-6">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  All Products
                </h1>
                <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
              </div>
            <div className="flex flex-wrap md:-m-4 -m-2 ">
              {data?.map((item) => {
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
            </div>{" "}
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
}
