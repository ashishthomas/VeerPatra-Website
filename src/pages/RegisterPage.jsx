import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import LoginLayout from "../Reusable Components/LoginLayout";
import PageLayout from "../Components/PageLayout";

const RegisterPage = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password cannot be longer than 20 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // 🔹 Handle Submit Logic
  const handleFormSubmit = (values, { resetForm }) => {
    try {
      // Retrieve existing users (if any)
      const existingUsers =
        JSON.parse(localStorage.getItem("registeredUsers")) || [];

      // Append new user data
      const updatedUsers = [...existingUsers, values];

      // Save back to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

      // Debug log for developer visibility
      console.group("🟢 User Registered Successfully");
      console.log("Username:", values.userName);
      console.log("Email:", values.email);
      console.log("All Registered Users:", updatedUsers);
      console.groupEnd();

      // Reset the form after submission
      resetForm();
      alert("Registration Successful!");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <PageLayout>
      <LoginLayout height="70vh" title={"Register"}>
        <form onSubmit={formikDetails.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              className="w-full"
              label="Username"
              name="userName"
              variant="outlined"
              value={formikDetails.values.userName}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              error={
                formikDetails.touched.userName &&
                Boolean(formikDetails.errors.userName)
              }
              helperText={
                formikDetails.touched.userName && formikDetails.errors.userName
              }
            />
            <TextField
              className="w-full"
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formikDetails.values.email}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              error={
                formikDetails.touched.email &&
                Boolean(formikDetails.errors.email)
              }
              helperText={
                formikDetails.touched.email && formikDetails.errors.email
              }
            />
            <TextField
              className="w-full"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              value={formikDetails.values.password}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              error={
                formikDetails.touched.password &&
                Boolean(formikDetails.errors.password)
              }
              helperText={
                formikDetails.touched.password && formikDetails.errors.password
              }
            />
            <TextField
              className="w-full"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              value={formikDetails.values.confirmPassword}
              onChange={formikDetails.handleChange}
              onBlur={formikDetails.handleBlur}
              error={
                formikDetails.touched.confirmPassword &&
                Boolean(formikDetails.errors.confirmPassword)
              }
              helperText={
                formikDetails.touched.confirmPassword &&
                formikDetails.errors.confirmPassword
              }
            />
            <Button
              sx={{ backgroundColor: "#16a085" }}
              variant="contained"
              fullWidth
              className="mt-4 px-5 py-2 font-semibold hover:bg-[#1abc9c] shadow-md hover:shadow-lg"
              type="submit"
            >
              SUBMIT
            </Button>
          </Stack>
        </form>
      </LoginLayout>
    </PageLayout>
  );
};

export default RegisterPage;
