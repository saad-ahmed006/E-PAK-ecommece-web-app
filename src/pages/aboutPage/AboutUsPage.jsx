import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Wrapper from "../../components/wrapper/Wrapper";
import { useSelector } from "react-redux";
export default function About() {
  const { mode } = useSelector((state) => state.AppStateSlice);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Wrapper>
        <div className="mx-2 md:mx-6">
          <div>
            <h1
              className="text-2xl md:text-4xl mb-7"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              About Us
            </h1>
          </div>
          <div className=" space-y-4">
            <div className="about-section bg-gray-100 p-4 md:p-8 rounded">
              <h2 className="text-xl md:text-2xl font-semibold">Our Story</h2>
              <p className="text-xs md:text-base text-gray-600">
                Our story is one of passion, innovation, and a relentless
                pursuit of excellence. Established with a vision to redefine the
                sneaker landscape, Nikee Shoes has evolved into a symbol of
                style, comfort, and performance. From our humble beginnings, we
                have continuously pushed the boundaries of footwear technology,
                creating sneakers that not only look great but also enhance your
                every step. Each pair of Nikee shoes is a testament to our
                dedication to craftsmanship, quality, and design. Our journey is
                woven with the threads of countless athletes and everyday
                individuals who choose us to help them achieve their goals. Join
                us as we continue to write the chapters of our story, one
                remarkable pair of shoes at a time.
              </p>
            </div>
            <div className=" bg-gray-100 p-4 md:p-8 rounded">
              <h2 className="text-xl md:text-2xl font-semibold">Our Mission</h2>
              <p className="text-xs md:text-base text-gray-600">
                At E-Pak Store, our mission is to empower individuals to reach
                new heights with every step they take. We're committed to
                creating more than just shoes; we're crafting companions for
                your journey, whether it's on the track, the court, or the
                streets. Our mission is rooted in a dedication to pushing the
                boundaries of innovation, design, and sustainability. We strive
                to provide footwear that not only enhances your performance but
                also reflects your personal style. With every pair of Nikee
                shoes, we aim to inspire you to chase your dreams, overcome
                challenges, and express yourself confidently. Together, let's
                embrace the path ahead and leave an indelible mark on the world,
                one shoe at a time.
              </p>
            </div>
            <div className=" bg-gray-100 p-4 md:p-8 rounded">
              <h2 className="text-xl md:text-2xl font-semibold">Our Team</h2>
              <p className="text-xs md:text-base text-gray-600">
                Our E-Pak Store team is a diverse and passionate collective
                driven by a shared love for sneakers and a commitment to
                delivering excellence. From visionary designers and engineers to
                dedicated customer support, each member plays a vital role in
                crafting the exceptional footwear and experiences that define
                Nikee Shoes. We take pride in our collaborative spirit, blending
                creativity, expertise, and a relentless pursuit of perfection.
                With a deep understanding of the athlete's needs and the
                fashion-forward individual's desires, we work tirelessly to
                create sneakers that seamlessly merge performance and style. As
                a team, we're united in our dedication to pushing the envelope
                and setting new benchmarks for sneaker innovation. Together,
                we're not just shaping sneakers; we're shaping the future of
                footwear.
              </p>
            </div>
            <div className=" bg-gray-100 p-4 md:p-8 rounded text-center">
              <p className="text-lg">
                Thank you for getting to know us. Now, let's start your shopping
                journey!
              </p>
              <Link to="/">
                <button className="py-4 px-8 rounded-full bg-black text-[#FCC50B] text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
                  Enjoy Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
