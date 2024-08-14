import Books from "../../public/books1.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to <span className="text-pink-500">Book Worm !</span>
            </h1>

            <h3 className="text-xl md:text-2xl font-bold">
              Discover your next great{" "}
              <span className="text-pink-500">read.</span>
            </h3>

            <p className="text-sm md:text-xl text-justify">
              At Book Worm, we believe in the magic of books. Whether you are a
              lifelong reader or just starting your literary journey, you will
              find a world of stories waiting for you. Explore our vast
              collection of genres, from timeless classics to the latest
              bestsellers, and find your next favorite book. Happy reading!
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 bg-pink-500  hover:bg-pink-700 btn-secondary">
            Get Started
          </button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={Books}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
