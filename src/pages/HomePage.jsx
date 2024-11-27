import React from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
