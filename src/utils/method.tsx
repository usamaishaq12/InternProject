import { showMessage, MessageOptions } from "react-native-flash-message";

const successMessage = (description = "", message = "Success"): void => {
  showMessage({
    message: message,
    description: description,
    type: "success",
    position: "top",
  });
};

const errorMessage = (description = "", message = "Error"): void => {
  showMessage({
    message: message,
    description: description,
    type: "danger",
    position: "top",
  });
};

const toastMessage = (
  description = "",
  message = "Info",
  type: MessageOptions["type"] = "info"
): void => {
  showMessage({
    message: message,
    description: description,
    type: type,
  });
};

const GlobalMethods = { toastMessage, errorMessage, successMessage };

export default GlobalMethods;
