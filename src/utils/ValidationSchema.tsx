import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    // .min(8, ({ min }) => `*Password must be at least ${min} characters`)
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
  rememberMe: yup
    .boolean()
    .oneOf([true], "You must accept terms and conditions to continue"),
});

export const ResetPassword = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
});

export const SignUpValidationSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "*Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "*Password must have a capital letter")
    .matches(/\d/, "*Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "*Password must have a special character"
    )
    .min(8, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  // .oneOf([yup.ref("password"),null], "Passwords must match"),  works in js file
});
