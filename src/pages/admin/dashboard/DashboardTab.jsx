import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader/Loader";
import EmptyImage from "../../../assets/720x400.png";
import { Link } from "react-router-dom";
import { handleEdit } from "../../../store/features/AddUpdateProductDataSlice";
function DashboardTab({
  productData,
  loading,
  handleDelete,
  userData,
  orderData,
  messageData
}) {
  const { mode } = useSelector((state) => state.AppStateSlice);
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 hover:shadow-[#FCC50B] border-[#FCC50B] text-[#FCC50B] rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] "
                >
                  <div className="flex gap-2 items-center">
                    <MdOutlineProductionQuantityLimits />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center "
                >
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center "
                >
                  <div className="flex gap-2 items-center">
                    <FaUser /> Users
                  </div>
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="font-medium border-b-2 border-red-500 bg-[#605d5d12] text-red-500 rounded-lg text-xl  hover:shadow-red-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center "
                >
                  <div className="flex gap-2 items-center">
                    <FaMessage /> Message
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className="  px-4 md:px-0 mb-16">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Product Details
                </h1>
                <div className=" flex justify-end">
                  <Link to={"/addproduct"}>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-[#FCC50B] shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-[#a98d30e9] outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      {" "}
                      <div className="flex gap-2 items-center">
                        Add Product <FaCartPlus size={20} />
                      </div>
                    </button>
                  </Link>
                </div>

                <div className="relative overflow-x-auto ">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead
                      className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>

                    {productData?.map((product, index) => {
                      return (
                        <tbody className="" key={index}>
                          {/* {loading && <Loader/> } */}
                          <tr
                            key={index}
                            className="bg-gray-50 border-b  dark:border-gray-700"
                            style={{
                              backgroundColor:
                                mode === "dark" ? "rgb(46 49 55)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {index + 1}.
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-black whitespace-nowrap"
                            >
                              <img
                                className="w-16"
                                src={product?.imageUrl}
                                alt="img"
                              />
                            </th>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {product?.title}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              PKR{" "}
                              {Math.floor(product?.price).toLocaleString(
                                "en-US"
                              )}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {product?.category}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {product?.date}
                            </td>
                            <td className="px-6 py-4">
                              <div className=" flex gap-2">
                                <div
                                  className=" flex gap-2 cursor-pointer text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  <div>
                                    <AiFillDelete
                                      className="w-6 h-6"
                                      onClick={() => handleDelete(product)}
                                    />
                                  </div>
                                  <div>
                                    <Link to={"/updateproduct"}>
                                      <AiFillPlusCircle
                                        className="w-6 h-6"
                                        onClick={() => {
                                          dispatch(handleEdit(product));
                                        }}
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="relative overflow-x-auto mb-16">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Order Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3 w-full">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Image
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>

                  {orderData?.map((orderData) => {
                    const {
                      address,
                      date,
                      mobileNumber,
                      name,
                      pincode,
                      id,
                      email,
                      cart,
                    } = orderData;
                    return (
                      <>
                        {cart.map((product) => (
                          <>
                            <tbody>
                              <tr
                                className="bg-gray-50 border-b  dark:border-gray-700"
                                style={{
                                  backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {id}
                                </td>

                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                >
                                  <img
                                    className="w-16"
                                    src={product?.imageUrl}
                                    alt="img"
                                  />
                                </th>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {product?.title}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  PKR{" "}
                                  {Math.floor(product?.price).toLocaleString(
                                    "en-US"
                                  )}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {product?.category}
                                </td>

                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {name}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {address}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {pincode}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {mobileNumber}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {email}
                                </td>
                                <td
                                  className="px-6 py-4 text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {date}
                                </td>
                              </tr>
                            </tbody>
                          </>
                        ))}
                      </>
                    );
                  })}
                </table>
              </div>
            </TabPanel>

            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  User Details
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Password
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Check Verify by Google
                      </th>
                    </tr>
                  </thead>
                  {userData?.map((user, index) => {
                    const { id, name, email, password, time } = user;
                    return (
                      <>
                        <tbody key={id}>
                          <tr
                            className="bg-gray-50 border-b  dark:border-gray-700"
                            style={{
                              backgroundColor:
                                mode === "dark" ? "rgb(46 49 55)" : "",
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {index + 1}.
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {id}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {name}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {email}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {password}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {time.toDate().toDateString()}
                            </td>
                            <td
                              className="px-6 py-4 text-black "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              Non-Verified By Google
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="relative overflow-x-auto mb-10">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold underline"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  User Message
                </h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    className="text-xs text-black uppercase bg-gray-200 "
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Message
                      </th>
                    </tr>
                  </thead>
                  {messageData?.map((data, index) => {
                    const { id, name, email, mobileNumber,message } = data;
                    return (
                  <>
                    <tbody>
                      <tr
                        className="bg-gray-50 border-b  dark:border-gray-700"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "rgb(46 49 55)" : "",
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {name}
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {mobileNumber}
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {email}
                        </td>
                        <td
                          className="px-6 py-4 text-black "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {message}
                        </td>
                      </tr>
                    </tbody>
                  </>
                   );
                  })} 
                </table>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
