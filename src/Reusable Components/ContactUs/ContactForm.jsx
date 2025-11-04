import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = { name: "", email: "", message: "" };

const validationSchema = Yup.object({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  message: Yup.string().min(10).required(),
});

export default function ContactForm() {
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
    <Box className="mt-12 bg-white p-6 rounded-2xl shadow-md w-full md:w-[45%]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 mt-12">
            <Field
              as={TextField}
              fullWidth
              name="name"
              label="Your Name"
              size="small"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              as={TextField}
              fullWidth
              name="email"
              label="Your Email"
              size="small"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              as={TextField}
              fullWidth
              name="message"
              label="Message"
              multiline
              rows={4}
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />

            <Button type="submit" variant="contained" className="w-full">
              {isSubmitting ? (
                <>
                  <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
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
  );
}
