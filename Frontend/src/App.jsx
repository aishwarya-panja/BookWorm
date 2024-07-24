import Course from "./components/Course";
import Register from "./components/Register";
import Home from "./home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/register" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
};

export default App;
