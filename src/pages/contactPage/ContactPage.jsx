// components/ContactForm.js
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import TOAST from "../../components/toast/Toast";
import DeveloperImage from "../../assets/developer.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { addMessageDataInit } from "../../store/features/UserContactMessageSlice";
import Loader from "../../components/loader/Loader";
export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || email == "" || mobileNumber == "" || message == "") {
      return TOAST.Toast_Error("All fields are required");
    } else {
      TOAST.Toast_Success("Thanks /The form was submit successfully..");
      const messageObject = { name, email, mobileNumber, message };
      dispatch(addMessageDataInit(messageObject));
    }
    setName("");setEmail(""); setMessage(""); setMobileNumber("");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* <Wrapper> */}
      <>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Contact Us
              </h1>
              <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Get in Touch
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Have questions, suggestions, or feedback? Reach out to us
                  using the form below, and we'll get back to you as soon as
                  possible.
                </p>
                <form className="mt-6">
                  <span className="font-bold">Email :</span>E-pak@gmail.com
                </form>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Visit Us
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  Swing by our physical location to experience our sneakers up
                  close. Our team is excited to welcome you and assist with any
                  queries you may have.
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">E-Pak Store</h3>
                  <p className="text-gray-600">1234 Street</p>
                  <p className="text-gray-600">Shahrah-e-Faisal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-20 mx-4">
            <div className="lg:w-1/2 text-center bg-gray-100 p-8" id="body">
              <h2 className="text-4xl font-bold mb-4">
                Let's talk about everything!
              </h2>
              <img
                alt="testimonial"
                className="w-40 h-40 mb-8 object-fill rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={DeveloperImage}
              />
              <h2 className="text-2xl font-bold mb-2">
                Feel free to ask us anything!
              </h2>
              <p className="mb-4">
                Have doubts or suggestions to make? Feel free to ask anything.
                If you have any suggestions, please let me know. Your
                suggestions are highly appreciated. I appreciate your time and
                try hard to reply to every single message posted here! Keep
                dropping your priceless opinions.
              </p>
            </div>

            <div className="lg:w-1/2 bg-gray-100 p-8 w-full">
              <form>
                <div className="mb-4">
                  <label for="fullName" className="block text-sm font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-2 border border-gray-300 outline-none rounded-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label for="email" className="block text-sm font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 outline-none rounded-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label for="phone" className="block text-sm font-bold">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-2 border border-gray-300 outline-none rounded-sm"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label for="message" className="block text-sm font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-2 border border-gray-300 outline-none rounded-sm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="bg-[#FCC50B] w-full py-2 text-xl  rounded-sm"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
      {/* </Wrapper> */}
    </Layout>
  );
}
