import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Gallery from "./Gallery";
import Hero from "../Components/Hero";
import PageLayout from "../Components/PageLayout";

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Gallery />
      <Testimonial />
      <Faq />
    </PageLayout>
  );
}

export default HomePage;
