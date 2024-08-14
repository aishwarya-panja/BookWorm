import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10"> {/* Reduced mt-10 for less space */}
        <div className="flex flex-col md:flex-row my-10">
          {/* Main Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1 mt-6 md:mt-12 space-y-12"> {/* Adjusted mt-6 */}
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-pink-500">Book Worm</span>
            </h1>
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-xl text-justify">
              At Book Worm, we are passionate about bringing you the best books at unbeatable prices. Our goal is to make reading accessible to everyone and provide a platform where book lovers can find their next great read.
            </p>
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="text-lg text-justify">
                Our mission is to cultivate a love of reading by offering a diverse collection of books that cater to all tastes and interests. We strive to create an engaging and user-friendly platform that connects readers with the books they love.
              </p>
            </section>
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold">Our Vision</h2>
              <p className="text-lg text-justify">
                We envision a world where every individual has access to the joy of reading. Through our online bookstore, we aim to foster a global community of readers and support lifelong learning and personal growth through literature.
              </p>
            </section>
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold">Jane Doe</h3>
                  <p className="text-lg">Founder & CEO</p>
                  <p>
                    Jane is a lifelong book lover with a background in literature and technology. She founded Book Worm with the vision of creating a seamless online experience for book enthusiasts.
                  </p>
                </div>
                <div className="bg-blue-400 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold">John Smith</h3>
                  <p className="text-lg">Chief Technology Officer</p>
                  <p>
                    John is an experienced tech professional dedicated to building and maintaining our platform. He ensures that our online bookstore runs smoothly and remains secure.
                  </p>
                </div>
              </div>
            </section>
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold">Our Values</h2>
              <ul className="list-disc pl-5 space-y-2 text-lg">
                <li>Customer Satisfaction: We prioritize our customers' needs and feedback.</li>
                <li>Integrity: We operate with honesty and transparency.</li>
                <li>Diversity: We celebrate diverse perspectives and offer a wide range of books.</li>
                <li>Innovation: We continually improve our platform to enhance the reading experience.</li>
              </ul>
            </section>
          </div>
          {/* Optional Image or Additional Content */}
          <div className="w-full md:w-1/2 order-1 md:order-2 mt-6 md:mt-12 md:ml-12">
            <img
              src="aboutBooks.jpg"
              alt="Bookstore"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
