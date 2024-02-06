import React, { useEffect } from "react";
import { FaProductHunt, FaShoppingCart, FaUserTie } from "react-icons/fa";
import Layout from "../../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import DashboardTab from "./DashboardTab";
import Wrapper from "../../../components/wrapper/Wrapper";
import { getProductDataInit } from "../../../store/features/ProductsSlice";
import {
  deleteProductDataInit,
  getUserProfileDataInit,
} from "../../../store/features/AddUpdateProductDataSlice";
import { getAdminPageUserOrderDataInit } from "../../../store/features/OrderPlaceSlice";
import { getMessageDataInit } from "../../../store/features/UserContactMessageSlice";
import { FaMessage } from "react-icons/fa6";

function Dashboard() {
  const { mode } = useSelector((state) => state.AppStateSlice);
  const { data, loading } = useSelector((state) => state.ProductsSlice);
  const { userProfileData } = useSelector((state) => state.AddProductDataSlice);
  const { adminPageOrderData } = useSelector((state) => state.OrderPlaceSlice);
  const { adminPageMessageData } = useSelector(
    (state) => state.UserContactMessage
  );
 let totalOrder = adminPageOrderData.map((i)=>i.cart.map((j)=>j)).reduce((total, innerArray) => total + innerArray.length, 0);

  const dispatch = useDispatch();
  const handleDelete = (product) => {
    dispatch(deleteProductDataInit(product));
  };
  useEffect(() => {
    dispatch(getProductDataInit());
    dispatch(getUserProfileDataInit());
    dispatch(getAdminPageUserOrderDataInit());
    dispatch(getMessageDataInit());
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <section className="text-gray-600 body-font mt-10 mb-10 ">
          <div className="container px-5 mx-auto mb-10  ">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-[#FCC50B]  w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaProductHunt size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {data?.length}
                  </h2>
                  <p
                    className=" text-[#FCC50B]  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Products
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-[#FCC50B] w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaShoppingCart size={50} />
                    
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {totalOrder}
                  </h2>
                  <p
                    className=" text-[#FCC50B]  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Orders
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-[#FCC50B] w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaUserTie size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {userProfileData?.length}
                  </h2>
                  <p
                    className=" text-[#FCC50B]  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Users
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div
                  className=" border-2 hover:shadow-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <div
                    className="text-[#FCC50B] w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <FaMessage size={50} />
                  </div>
                  <h2
                    className="title-font font-medium text-3xl text-black fonts1"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {adminPageMessageData.length}
                  </h2>
                  <p
                    className=" text-[#FCC50B]  font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total Message
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DashboardTab
            productData={data}
            loading={loading}
            handleDelete={handleDelete}
            userData={userProfileData}
            orderData={adminPageOrderData}
            messageData={adminPageMessageData}
          />
        </section>
      </Wrapper>
    </Layout>
  );
}

export default Dashboard;
