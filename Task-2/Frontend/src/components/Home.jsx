import React from "react";

const Home = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 text-black min-h-screen flex items-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-screen-xl px-6 mx-auto">
        <div className="flex flex-col items-start text-center lg:text-left">
          <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-tight text-gray-800 md:text-5xl xl:text-6xl">
            Welcome to Book Store
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-600 lg:text-xl">
            create your own books across all genres. Whether you're looking for
            the latest releases or timeless classics, we've got you covered.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            className="rounded-lg shadow-lg h-[40vw] -mt-[6vw] "
            src="https://i.pinimg.com/736x/31/3b/21/313b2140f4cc1898eeb567048278cd8e.jpg"
            alt="Book Store Mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
