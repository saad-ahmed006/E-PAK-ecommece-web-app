import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TOAST from "../../../components/toast/Toast";
import { updateProductDataInit } from "../../../store/features/AddUpdateProductDataSlice";
function UpdateProduct() {
  const [updateProduct, setUpdateProduct] = useState();
  const { editProductData } = useSelector((state) => state.AddProductDataSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProductData = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setUpdateProduct({ ...updateProduct, ...newInput });
  };

  const handleSubmit = async () => {
    if (
      updateProduct.title == "" ||
      updateProduct.price == null ||
      updateProduct.imageUrl == "" ||
      updateProduct.category == "" ||
      updateProduct.description == ""
    ) {
      return TOAST.Toast_Error("All fields are required");
    } else {
      TOAST.Toast_Success("Update Product successfully");
      dispatch(updateProductDataInit(updateProduct));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  useEffect(() => {
    setUpdateProduct(editProductData);
  }, []);
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl relative">
          {/* {loading && <Loader />} */}
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={updateProduct && updateProduct.title}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              value={updateProduct && updateProduct.price}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageUrl"
              value={updateProduct && updateProduct.imageUrl}
              onChange={(event) => handleProductData(event)}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              value={updateProduct && updateProduct.category}
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
              value={updateProduct && updateProduct.description}
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
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
