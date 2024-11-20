import React, { useState } from "react";
import { TextField, Button,Typography, Stack } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginLayout from "../Reusable Components/LoginLayout";


const LoginPage = () => {
  const [formValues, setFormValues] = useState({});

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data Submitted:", values);
    setFormValues(values); // Save form values for backend access
    resetForm();
  };

  return (
   <LoginLayout>

      <Typography
          variant="h4"
          align="center"
          sx={{
            marginBottom: 2,
            color: "#2c3e50",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#2c3e50" },
                      "&:hover fieldset": { borderColor: "#16a085" },
                    },
                  }}
                />
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#2c3e50" },
                      "&:hover fieldset": { borderColor: "#16a085" },
                    },
                  }}
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="space-between"
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      padding: "10px 20px",
                      fontWeight: "600",
                      backgroundColor: "#16a085",
                      "&:hover": { backgroundColor: "#1abc9c" },
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "10px 20px",
                      fontWeight: "600",
                      backgroundColor: "#e74c3c",
                      "&:hover": { backgroundColor: "#c0392b" },
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={() => alert("Navigate to Register Page")}
                  >
                    Register
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
   
    </LoginLayout>
  );
};

export default LoginPage;
