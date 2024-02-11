import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AllProducts from "./pages/allProducts/AllProducts";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/productInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdataProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductSuccess } from "./store/features/CartSlice";
import { collection, onSnapshot } from "firebase/firestore";
import { fireDB } from "./firebase/FirebaseConfig";
import UserProfile from "./pages/userProfile/UserProfile";
import AdminProtectedRoute from "./components/protectedRoute/AdminProtectedRoute";
import UserProtectedRoute from "./components/protectedRoute/UserProtectedRoute";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/AboutUsPage";
import Category from "./pages/category/Category";
const user = JSON.parse(localStorage.getItem("user"));
const cartCollectionRef = collection(fireDB, "Cart " + user?.user?.uid);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const getData = async () => {
        onSnapshot(cartCollectionRef, (data) => {
          let todosArrayIncludeId = [];
          data?.docs.map((doc) => {
            return todosArrayIncludeId.push({ ...doc.data(), id: doc.id });
          });
          // console.log(todosArrayIncludeId);
          dispatch(getCartProductSuccess(todosArrayIncludeId));
        });
      };
      getData();
    }
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route
            path="/order"
            element={
              <UserProtectedRoute>
                <Order />
              </UserProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category/:id" element={<Category />} />
          <Route
            path="/addproduct"
            element={
              <AdminProtectedRoute>
                <AddProduct />
              </AdminProtectedRoute>
            }
          />
          <Route
            path="/updateproduct"
            element={
              <AdminProtectedRoute>
                <UpdateProduct />
              </AdminProtectedRoute>
            }
          />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;