import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
          {/* Contact Information and Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col space-y-12 mb-12 md:mb-0"> {/* Added mb-12 */}
              <div className="order-2 md:order-1 mt-12 md:mt-0">
                <h1 className="text-4xl font-bold">
                  You can
                  <span className="text-pink-500"> Contact Us </span> Here!
                </h1>
                <p className="text-lg mt-4 text-justify">
                  At Book Worm, we are always here to support you. Have questions or need
                  support? Feel free to reach out to us through the form below
                  or use the contact details provided.
                </p>
                <section className="space-y-8 mt-8">
                  <h2 className="text-2xl font-semibold">Contact Information</h2>
                  <p className="text-lg">
                    <strong>Email:</strong> support@bookworm.com
                  </p>
                  <p className="text-lg">
                    <strong>Phone:</strong> +1-234-567-890
                  </p>
                  <p className="text-lg">
                    <strong>Address:</strong> 123 Book Street, Reading City, CA 12345
                  </p>
                  <p className="text-lg">
                    You can also find us on social media:
                    <ul className="list-disc pl-5 mt-2">
                      <li>
                        <a
                          href="https://facebook.com"
                          className="text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com"
                          className="text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com"
                          className="text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </p>
                </section>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
              <img
                src="book2.jpg"
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full mt-12 md:mt-32">
            <form
              className="bg-gray-200 p-8 rounded-lg shadow-md space-y-6"
              action="/send-message" // Set this to your backend endpoint
              method="POST"
            >
              <h2 className="text-2xl font-semibold text-black">
                Send Us a Message
              </h2>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-black">Name</span>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-black">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    required
                  />
                </label>
                <label className="block">
                  <span className="text-black">Message</span>
                  <textarea
                    name="message"
                    rows="6"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    required
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
