import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import TOAST from "../../../components/toast/Toast";
import { fireDB } from "../../../firebase/FirebaseConfig";
import { isLoading } from "../../../store/features/AppState";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader/Loader";
import { addProductDataInit } from "../../../store/features/AddUpdateProductDataSlice";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [products, setProducts] = useState({
    title: "",
    price: null,
    imageUrl: "",
    category: "",
    description: "",
    // time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const { loading } = useSelector((state) => state.AddProductDataSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProductData = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setProducts({ ...products, ...newInput });
  };

  const handleSubmit = async () => {
    if (
      products.title == "" ||
      products.price == null ||
      products.imageUrl == "" ||
      products.category == "" ||
      products.description == ""
    ) {
      return TOAST.Toast_Error("All fields are required");
    } else {
      TOAST.Toast_Success("Product Add successfully");
      dispatch(addProductDataInit(products));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }

    setProducts({
      title: "",
      price: "",
      imageUrl: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl relative">
          {loading && <Loader />}
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={products.title}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              value={products.price}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageUrl"
              value={products.imageUrl}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              value={products.category}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="description"
              value={products.description}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              {/* {loading ? <Loader /> : "Add Product"} */}
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
