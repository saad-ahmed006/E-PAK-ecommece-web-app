import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Wrapper from "../../components/wrapper/Wrapper";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { getProductDataInit } from "../../store/features/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
export default function Home() {
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const [searchProduct, setSearchProduct] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDataInit());
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <HeroSection />
        <Wrapper>
          <Filter
            searchProduct={searchProduct}
            setSearchProduct={setSearchProduct}
          />
         
              <ProductCard
                data={data}
                searchProduct={searchProduct}
                loading={loading}
              />{" "}
          <Track />
          <Testimonial />
        </Wrapper>
      </Layout>
    </>
  );
}
