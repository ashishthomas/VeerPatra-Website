import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import contactText from "../Constants/ContactText";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <Box className="flex flex-col md:flex-row justify-between mt-6 h-[100vh] bg-white overflow-hidden relative">
        {/* Left Contact Box (Animated) */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-[50%] m-auto h-auto md:h-[100%] p-6 md:p-16 flex flex-col justify-center bg-white"
        >
          <Typography variant="body1" className="mt-10">
            {contactText.headingSmall}
          </Typography>

          <Typography
            variant="p"
            className="font-bold text-[30px] md:text-[40px]"
          >
            {contactText.headingLarge}
          </Typography>

          <Typography variant="body1">{contactText.description}</Typography>

          <Typography
            variant="body1"
            className="m-10 text-sm md:text-base flex items-center"
          >
            <LocationCity />
            <span className="ml-2">{contactText.address}</span>
          </Typography>

          <Typography
            variant="body1"
            className="mt-2 text-sm md:text-base flex items-center"
          >
            <Phone />
            <span className="ml-2">{contactText.phone}</span>
          </Typography>

          <Typography
            variant="body1"
            className="mt-2 text-sm md:text-base flex items-center"
          >
            <Mail />
            <span className="ml-2">{contactText.email}</span>
          </Typography>
        </motion.div>

        {/* Right Image Box (Animated) */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-[50%] h-auto md:h-[100%] flex justify-center items-center bg-white"
        >
          <img
            src={contactText.image.src}
            alt={contactText.image.alt}
            className="w-[80%] md:w-[70%] h-auto md:h-[70%] object-cover rounded-md shadow-lg"
          />
        </motion.div>
      </Box>
      <Footer />
    </div>
  );
}

export default ContactUs;
