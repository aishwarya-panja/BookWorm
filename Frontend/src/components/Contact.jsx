import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              You can
              <span className="text-pink-500"> Contact Us </span>Here!
            </h1>

            <form></form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
