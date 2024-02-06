import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyImage from "../../assets/720x400.png";
import { Link, useNavigate } from "react-router-dom";
import TOAST from "../toast/Toast";
import { addToCartInit } from "../../store/features/CartSlice";
function ProductCard({ data, searchProduct,  }) {
  const { mode } = useSelector((state) => state.AppStateSlice);
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    if (user) {
      let Product = { ...product };
      Product["qty"] = 1;
      Product["TotalProductPrice"] = Product.qty * parseFloat(Product.price);
      dispatch(addToCartInit({ uid: user.user.uid, product: Product }));
      TOAST.Toast_Success("Item Add Successfully");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="text-gray-600 body-font ">
      <div className="container px-5 md:px-0 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-[#FCC50B] rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4 ">
          {data
            .filter((obj) => obj.title.toLowerCase().includes(searchProduct))
            .map((item) => {
              const { title, price, imageUrl, id } = item;
              return (
                <>
                  <div className="p-4 md:w-1/4  drop-shadow-lg " key={id}>
                    <div
                      className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <Link to={`/productinfo/${id}`}>
                        <div className="flex justify-center cursor-pointer">
                          <img
                            className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                            src={imageUrl}
                            alt="blog"
                          />
                        </div>
                      </Link>
                      <div className="p-5 border-t-2">
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          E-Pak
                        </h2>
                        <h1
                          className="title-font text-lg font-medium text-gray-900 mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        <p
                          className="leading-relaxed mb-3"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          PKR {Math.floor(price).toLocaleString("en-US")}
                        </p>
                        <div className=" flex justify-center">
                          <button
                            type="button"
                            className="focus:outline-none text-white bg-[#FCC50B] hover:bg-[#fcb728] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                            onClick={() => {
                              handleAddToCart(item);
                            }}
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
