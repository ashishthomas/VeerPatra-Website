import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import ContactInfo from "../Reusable Components/ContactUs/ContactInfo";
import ContactForm from "../Reusable Components/ContactUs/ContactForm";
import ContactImage from "../Reusable Components/ContactUs/ContactImage";
import contactText from "../Constants/ContactText";

function ContactUs() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-between mt-6 min-h-[90vh] bg-gray-50 overflow-hidden relative">
        {/* Left Contact Info Section */}
        <ContactInfo contactText={contactText} />
        <ContactForm />
        <ContactImage image={contactText.image} />
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
