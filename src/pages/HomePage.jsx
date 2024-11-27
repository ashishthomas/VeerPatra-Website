import React from "react";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Navbar from "../Components/Navbar";
import Gallery from "./Gallery";
import Hero from "../Components/Hero";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default HomePage;
