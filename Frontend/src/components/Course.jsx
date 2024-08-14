import Footer from "./Footer";
import Navbar from "./Navbar";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-20">
        {" "}
        {/* Adjusted pt-20 to increase space */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl">
            Explore our
            <span className="text-pink-500"> Premium Collection :)</span>
          </h1>
          <p className="mt-12">
            At Book Worm, we offer an extensive range of premium books that
            cater to all tastes and preferences. Our Paid Books section features
            exclusive titles, bestsellers, and critically acclaimed works that
            you won’t find in our free collection. Whether you are looking for
            the latest releases, literary classics, or hidden gems, you will
            find exceptional reads that enrich your bookshelf.
            <br />
            <br />
            Discover Our Top Picks:
            <br /> Dive into our curated selection of premium books, each
            handpicked to provide you with top-notch reading experiences. Enjoy
            high-quality content, unique editions, and enhanced features that
            bring your reading journey to life.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
