import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Wrapper from "../../components/wrapper/Wrapper";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import {useDispatch, useSelector } from "react-redux";
import { getProductDataInit } from "../../store/features/ProductsSlice";

export default function AllProducts() {
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDataInit());
    window.scrollTo(0, 0);
  }, []);


  return (
    <Layout>
      <Wrapper>
        <Filter
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />{" "}
        <section className="text-gray-600 body-font mt-">
          <div className="container px-5 md:px-0 py-8 md:py-16 mx-auto">
            <ProductCard data={data} searchProduct={searchProduct} />
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
}
