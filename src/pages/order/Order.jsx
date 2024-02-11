import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/wrapper/Wrapper";
import { getUserOrderDataInit } from "../../store/features/OrderPlaceSlice";
import Loader from "../../components/loader/Loader";
const user = JSON.parse(localStorage.getItem("user"));

function Order() {
  const { mode } = useSelector((state) => state.AppStateSlice);
  const { loading, userOrderData } = useSelector(
    (state) => state.OrderPlaceSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrderDataInit({ uid: user?.user?.uid }));
  }, []);

  return (
    <Layout>
      <Wrapper>
        <div className=" h-full pt-10">
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {loading ? (
                <div className="h-[600px]">
                  <Loader />
                </div>
              ) : (
                <>
                  {userOrderData?.map((OrderProduct) => {
                    const {
                      title,
                      price,
                      description,
                      imageUrl,
                      date,
                      category,
                    } = OrderProduct;
                    return (
                      <div
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                        style={{
                          backgroundColor: mode === "dark" ? "#282c34" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-md title-font text-gray-500 tracking-widest">
                              {category}
                            </h2>
                            <h2
                              className="text-lg font-bold text-gray-900"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {title}
                            </h2>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {description}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              <span
                                className="mt-1 text-md font-bold text-black"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Price:{" "}
                              </span>
                              {price}
                            </p>
                            <p
                              className="mt-1 text-xs text-gray-700"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              <span
                                className="mt-1 text-md font-bold text-black"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                OrderData:{" "}
                              </span>
                              {date}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Order;
