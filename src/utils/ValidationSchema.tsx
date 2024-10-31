import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
  rememberMe: yup
    .boolean()
    .oneOf([true], "You must accept terms and conditions to continue"),
});

export default loginValidationSchema;
