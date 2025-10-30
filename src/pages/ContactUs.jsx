import { LocationCity, Mail, Phone } from "@mui/icons-material";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import contactText from "../Constants/ContactText";

function ContactUs() {
  // ✅ Formik initial values
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message should be at least 10 characters long")
      .required("Message is required"),
  });

  // ✅ Submit handler
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert(
        `Message sent successfully!\n\nName: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`
      );

      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />

      <Box className="flex flex-col md:flex-row justify-between mt-6 min-h-[90vh] bg-gray-50 overflow-hidden relative">
        {/* Left Contact Info Section */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-[45%] p-8 md:p-16 flex flex-col justify-center"
        >
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {contactText.headingSmall}
          </Typography>

          <Typography
            variant="h4"
            className="font-bold text-gray-900 mb-4 leading-tight"
          >
            {contactText.headingLarge}
          </Typography>

          <Typography variant="body1" color="text.secondary" className="mb-8">
            {contactText.description}
          </Typography>

          <Box className="space-y-4">
            <Typography
              variant="body1"
              className="flex items-center text-gray-700"
            >
              <LocationCity className="text-blue-600 mr-3" />
              {contactText.address}
            </Typography>

            <Typography
              variant="body1"
              className="flex items-center text-gray-700"
            >
              <Phone className="text-blue-600 mr-3" />
              {contactText.phone}
            </Typography>

            <Typography
              variant="body1"
              className="flex items-center text-gray-700"
            >
              <Mail className="text-blue-600 mr-3" />
              {contactText.email}
            </Typography>
          </Box>

          {/* ✅ Contact Form with Formik */}
          <Box className="mt-10 bg-white p-6 rounded-2xl shadow-md">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  {/* Name Field */}
                  <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Your Name"
                    variant="outlined"
                    size="small"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  {/* Email Field */}
                  <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Your Email"
                    variant="outlined"
                    size="small"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  {/* Message Field */}
                  <Field
                    as={TextField}
                    fullWidth
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      textTransform: "none",
                      borderRadius: "10px",
                      backgroundColor: "#2563eb",
                      ":hover": { backgroundColor: "#1e40af" },
                    }}
                    className="w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <CircularProgress
                          size={20}
                          sx={{ color: "white", mr: 1 }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-[55%] flex justify-center items-center bg-white"
        >
          <img
            src={contactText.image.src}
            alt={contactText.image.alt}
            className="w-[85%] md:w-[80%] h-auto object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </Box>

      <Footer />
    </div>
  );
}

export default ContactUs;
