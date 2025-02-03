import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

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
          {/* code1 */}
          <Typography variant="body1" className="mt-10">
            How can we help you?
          </Typography>
          <Typography
            variant="p"
            className="font-bold text-[30px] md:text-[40px]"
          >
            Contact Us
          </Typography>
          <Typography variant="body1">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you!
          </Typography>
          <Typography variant="body1" className="m-10 text-sm md:text-base">
            <LocationCity />
            &nbsp; &nbsp;6th phase, Banashankri, Bengaluru
          </Typography>
          <Typography variant="body1" className="mt-2 text-sm md:text-base">
            <Phone />
            &nbsp;&nbsp;+2536145263
          </Typography>
          <Typography variant="body1" className="mt-2 text-sm md:text-base">
            <Mail />
            &nbsp;&nbsp;team3@gmail.com
          </Typography>

          {/* code2 */}

          {/* <Typography variant="h6" className="mt-10 text-gray-800">
            How can we help you?
          </Typography>

          <Typography
            variant="h4"
            className="font-bold text-[30px] md:text-[40px] text-gray-900"
          >
            Contact Us
          </Typography>

          <Typography variant="body1" className="text-gray-600 mt-4">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you!
          </Typography>

          <Box className="space-y-4 mt-6 text-sm md:text-base text-gray-700">
            <Typography variant="body1" className="flex items-center">
              <LocationCity className="mr-2" />
              6th Phase, Banashankri, Bengaluru
            </Typography>

            <Typography variant="body1" className="flex items-center">
              <Phone className="mr-2" />
              +2536145263
            </Typography>

            <Typography variant="body1" className="flex items-center">
              <Mail className="mr-2" />
              team3@gmail.com
            </Typography>
          </Box> */}
        </motion.div>

        {/* Right Image Box (Animated) */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-[50%] h-auto md:h-[100%] flex justify-center items-center bg-white"
        >
          <img
            src="https://st3.depositphotos.com/1007566/13231/v/450/depositphotos_132316748-stock-illustration-avatar-girl-brunette-contact-us.jpg"
            alt="Contact Us"
            className="w-[80%] md:w-[70%] h-auto md:h-[70%] object-cover rounded-md shadow-lg"
          />
        </motion.div>
      </Box>
      <Footer />
    </div>
  );
}

export default ContactUs;
