import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import {
  FaFacebookF,
  FaHeart,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDataInit,
  getSingleProductDataInit,
} from "../../store/features/ProductsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import TOAST from "../../components/toast/Toast";
import {
  addToCartInit,
  incrementProductInit,
} from "../../store/features/CartSlice";
import Wrapper from "../../components/wrapper/Wrapper";
import ProductCard from "../../components/productCard/ProductCard";
const user = JSON.parse(localStorage.getItem("user"));
function ProductInfo() {
  const { cart } = useSelector((state) => state.CartSlice);
  const { loading, singleProductData } = useSelector(
    (state) => state.ProductsSlice
  );
  const { id } = useParams();
  const { mode } = useSelector((state) => state.AppStateSlice);
  const { data } = useSelector((state) => state.ProductsSlice);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (user) {
      const findItem = cart?.find((item) => item.ProductId === product.id);
      if (!findItem) {
        let Product = { ...product };
        Product["ProductId"] = product.id;
        Product["qty"] = 1;
        Product["TotalProductPrice"] = Product.qty * parseFloat(Product.price);
        dispatch(addToCartInit({ uid: user.user.uid, product: Product }));
        TOAST.Toast_Success("Item Add Successfully");
      } else {
        let Product = { ...findItem };
        Product.qty = Product.qty + 1;
        Product.TotalProductPrice = Product.qty * parseFloat(Product.price);
        dispatch(incrementProductInit(Product));
        TOAST.Toast_Success("Item Quantity Add Successfully");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const relatedFilteredData = data?.filter(
      (item) =>
        item?.category?.toLowerCase() ===
          singleProductData?.category?.toLowerCase() &&
        item?.title?.toLowerCase() !== singleProductData?.title?.toLowerCase()
    );

    setRelatedProduct(relatedFilteredData);
  }, [data]);

  useEffect(() => {
    dispatch(getSingleProductDataInit({ uid: id }));
    dispatch(getProductDataInit());
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Wrapper>
        {loading ? (
          <div className="h-[400px]">
            <Loader />
          </div>
        ) : (
          <section className=" body-font overflow-hidden">
            <div className="container px-5 py-6 mx-auto">
              <div
                className="lg:w-4/5 mx-auto flex flex-wrap  items-center justify-center"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                <img
                  alt="ecommerce"
                  className="w-full md:w-1/2  mx-auto md:mx-0 md:h-[500px] rounded "
                  src={singleProductData?.imageUrl}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font  tracking-widest">
                    {singleProductData?.title?.split(" ")?.[0]}
                  </h2>
                  <h1 className=" text-3xl title-font font-medium mb-1">
                    {singleProductData?.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                      <FaRegStar className="text-yellow-500" />

                      <span className=" ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className=" px-1">
                        <FaFacebookF className="w-5 h-5" />
                      </a>
                      <a className=" px-1">
                        <FaTwitter className="w-5 h-5" />
                      </a>
                      <a className=" px-1">
                        <AiFillMessage className="w-5 h-5" />
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed border-b-2 mb-5 pb-5">
                    {singleProductData?.description}
                  </p>

                  <div className="flex items-center">
                    <span className="title-font font-medium text-md md:text-2xl ">
                      PKR{" "}
                      {Math.floor(singleProductData?.price).toLocaleString(
                        "en-US"
                      )}{" "}
                    </span>
                    <button
                      onClick={() => {
                        handleAddToCart(singleProductData);
                      }}
                      className="flex ml-auto text-white bg-[#FCC50B] md:text-lg border-0 py-2 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-[#fdc50d] rounded"
                    >
                      Add To Cart
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="text-gray-600 body-font mt-">
          <div className="container px-5 md:px-0 py-8 md:py-16 mx-auto">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-3">
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Related Products
              </h1>
              <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
            </div>
            <div className="flex flex-wrap md:-m-4 -m-2 ">
              {relatedProduct?.map((item) => {
                const { title, price, imageUrl, id } = item;
                return (
                  <ProductCard
                    title={title}
                    price={price}
                    imageUrl={imageUrl}
                    id={id}
                  />
                );
              })}{" "}
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
}

export default ProductInfo;
