import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BusinessDetail from "./pages/BusinessDetail";
// import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Businesses from "./pages/Businesses";
import Gallery from "./pages/Gallery";
import About from "./pages/About";


function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* HOME - OPTIONAL */}
      <Route path="/home" element={<Home />} />

      {/* ABOUT */}
      <Route
        path="/about"
        element={<About />}
      />

      {/* BUSINESSES */}
      <Route
        path="/businesses"
        element={<Businesses />}
      />

      {/* BUSINESS DETAIL */}
      <Route
        path="/business/:id"
        element={<BusinessDetail />}
      />

      {/* GALLERY */}
      <Route
        path="/gallery"
        element={<Gallery />}
      />

      {/* CONTACT */}
      <Route
        path="/contact"
        element={<Contact />}
      />


    </Routes>
  );
}

export default App;