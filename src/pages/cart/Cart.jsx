import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";
import { MdDelete } from "react-icons/md";
import {
  decrementProductInit,
  incrementProductInit,
} from "../../store/features/CartSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import TOAST from "../../components/toast/Toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { userOrderDataInit } from "../../store/features/OrderPlaceSlice";
import Loader from "../../components/loader/Loader";
const user = JSON.parse(localStorage.getItem("user"));

function Cart() {
  const [buyNowData, setBuyNowData] = useState({
    name: "",
    address: "",
    pincode: "",
    mobileNumber: "",
  });
  const { mode } = useSelector((state) => state.AppStateSlice);
  const { cart, loading } = useSelector((state) => state.CartSlice);
  const [grandTotal, setGrandTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const increment = (cartItem) => {
    if (user) {
      let Product = { ...cartItem };
      Product.qty = Product.qty + 1;
      Product.TotalProductPrice = Product.qty * parseFloat(Product.price);
      dispatch(incrementProductInit(Product));
    } else {
      TOAST.Toast_Error("user is not loggedin to increment");
    }
  };
  const decrememt = (cartItem) => {
    if (user) {
      let Product = { ...cartItem };
      Product.qty = Product.qty - 1;
      Product.TotalProductPrice = Product.qty * parseFloat(Product.price);
      dispatch(decrementProductInit(Product));
    } else {
      TOAST.Toast_Error("user is not loggedin to increment");
    }
  };

  const handleDelete = async (itemId) => {
    await deleteDoc(doc(fireDB, "Cart " + user.user.uid, itemId));
    window.location.reload();
  };

  const handleBuyNowData = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setBuyNowData({ ...buyNowData, ...newInput });
  };
  const buyNow = async () => {
    if (user) {
      if (
        buyNowData.name == "" ||
        buyNowData.address == "" ||
        buyNowData.pincode == "" ||
        buyNowData.mobileNumber == ""
      ) {
        TOAST.Toast_Error("all field are required");
      } else {
        const orderInfo = {
          data: {
            cart,
            ...buyNowData,
            email: user.user.email,
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          },
          uid: user.user.uid,
        };
        dispatch(userOrderDataInit(orderInfo));
      }
      TOAST.Toast_Success("Your order has been placed successfully");

      setTimeout(() => {
        navigate("/order");
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    let subTotal = 0;
    {
      cart?.map((item) => (subTotal += item?.TotalProductPrice));
    }
    setGrandTotal(subTotal);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div class="container mx-auto mt-8 flex flex-wrap my-16">
        {cart?.length ? (
          <>
            {loading ? (
              <div className="h-[400px]">
                <Loader />
              </div>
            ) : (
              <>
                {/* <!-- Cart Items (Left Side) --> */}
                <div class="cart-items w-full md:w-2/3 px-4">
                  <h1
                    class="text-2xl font-semibold mb-4"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Cart Item
                  </h1>

                  {/* <!-- Cart Item --> */}
                  {cart?.map((cartItem) => {
                    const {
                      title,
                      imageUrl,
                      description,
                      price,
                      qty,
                      TotalProductPrice,
                      id,
                    } = cartItem;
                    return (
                      <>
                        <div
                          class="bg-white p-6 mb-4 rounded-md shadow-md flex items-center"
                          key={id}
                        >
                          <img
                            src={imageUrl}
                            alt="Product Image"
                            class="w-20 h-20 object-cover rounded-md mr-4"
                          />
                          <div class="flex-1">
                            <h2 class="text-lg font-semibold">{title}</h2>
                            <p class="text-gray-600 text-xs">{description}</p>
                            <div class=" mt-2">
                              <span class="text-gray-700 font-semibold mr-2">
                                PKR {Math.floor(price).toLocaleString("en-US")}
                              </span>
                              <div className=" w-[100px] flex flex-row justify-between items-center my-2">
                                <RiSubtractFill
                                  size={26}
                                  className="border border-gray-700 rounded-sm cursor-pointer"
                                  onClick={() => decrememt(cartItem)}
                                />
                                <p className=" px-2 text-lg text-gray-700">
                                  {qty}
                                </p>
                                <MdAdd
                                  size={26}
                                  className="border border-gray-700 rounded-sm cursor-pointer"
                                  onClick={() => increment(cartItem)}
                                />
                              </div>
                            </div>
                            <span class="text-gray-700 font-semibold mr-2">
                              Total Price: PKR{" "}
                              {Math.floor(TotalProductPrice).toLocaleString(
                                "en-US"
                              )}
                            </span>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <MdDelete
                              className="w-6 h-6 cursor-pointer"
                              onClick={() => handleDelete(cartItem?.id)}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })}
                  {/* <!-- End Cart Item --> */}

                  {/* <!-- Add more cart items here --> */}
                </div>

                {/* <!-- Cart Summary (Right Side) --> */}
                <div class="cart-summary w-full md:w-1/3 px-4">
                  <h2
                    class="text-2xl font-semibold mb-4"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Cart Summary
                  </h2>
                  <div class="bg-white p-4 rounded-md shadow-md mb-4">
                    <div class="flex justify-between mb-3">
                      <span class="text-gray-700">Subtotal</span>
                      <span class="font-semibold">
                        PKR{" "}
                        {Math.floor(grandTotal - 100).toLocaleString("en-US")}
                      </span>
                    </div>
                    <div class="flex justify-between mb-3">
                      <span class="text-gray-700">Shipping</span>
                      <span class="font-semibold">PKR 100.00</span>
                    </div>
                    <hr class="border-t border-gray-300 mb-3" />
                    <div class="flex justify-between">
                      <span class="text-lg font-bold">Grand Total:</span>
                      <span class="text-lg font-bold">
                        PKR {Math.floor(grandTotal).toLocaleString("en-US")}
                      </span>
                    </div>
                  </div>
                  <Modal
                    handleBuyNowData={handleBuyNowData}
                    buyNowData={buyNowData}
                    setBuyNowData={setBuyNowData}
                    buyNow={buyNow}
                  />
                </div>
              </>
            )}
          </>
        ) : (
          <div
            className="flex-[2] flex flex-col items-center pb-[50px] mt-14  "
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              to="/"
              className="py-4 px-8 rounded-full bg-black text-[#FCC50B] text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
              style={{
                color: mode === "dark" ? "black" : "",
                backgroundColor: mode === "dark" ? "white" : "",
              }}
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
