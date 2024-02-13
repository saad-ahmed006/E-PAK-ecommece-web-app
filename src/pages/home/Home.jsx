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
import CategoryCard from "../../components/categoryCard/CategoryCard";
export default function Home() {
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const { mode } = useSelector((state) => state.AppStateSlice);
  const [uniqueCategoryValues, setUniqueCategoryValues] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleResetFilters = () => {
    setSearchQuery("");
    setFilterCategory("");
  };
  useEffect(() => {
    dispatch(getProductDataInit());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const categories = data?.map((product) => {
      return product.category;
    });
    const uniqueCategoriesSet = new Set(categories);
    const uniqueCategories = Array.from(uniqueCategoriesSet);
    setUniqueCategoryValues(uniqueCategories);
  }, [data]);

  return (
    <>
      <Layout>
        <HeroSection />
        <Wrapper>
          <section>
            <div className="container px-5 md:px-0 py-8 md:py-5 mx-auto">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-3">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Explore Categories
                </h1>
                <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
              </div>

              <div className="flex flex-row md:justify-between flex-wrap justify-around">
                <CategoryCard CategoryValues={uniqueCategoryValues} />
              </div>
            </div>
          </section>
          {/* filters */}
          <div className="mx-5 md:mx-0">
            <Filter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              handleResetFilters={handleResetFilters}
              data={data}
            />
          </div>
          <section className="text-gray-600 body-font ">
            <div className="container px-5 md:px-0 py-8 md:py-10 mx-auto">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-6">
                <h1
                  className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Our Latest Collection
                </h1>
                <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
              </div>
              {/* products */}

              <div className="flex flex-wrap md:-m-4 -m-2 ">
                {data
                  ?.filter((obj) =>
                    obj?.title?.toLowerCase().includes(searchQuery)
                  )
                  .filter((obj) =>
                    obj?.category
                      .toLowerCase()
                      .includes(filterCategory.toLowerCase())
                  )
                  .map((item) => {
                    const { title, price, imageUrl, id } = item;
                    return (
                      <ProductCard
                        key={id}
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
          <Track />
          <Testimonial />
        </Wrapper>
      </Layout>
    </>
  );
}
