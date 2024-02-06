import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Wrapper from "../../components/wrapper/Wrapper";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";

export default function AllProducts() {
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const [searchProduct, setSearchProduct] = useState("");
  const [Filtercategory, setFilterCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <Filter
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        />{" "}
        <ProductCard
          data={data}
          searchProduct={searchProduct}
        />
      </Wrapper>
    </Layout>
  );
}
