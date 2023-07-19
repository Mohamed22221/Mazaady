import { toast } from "react-toastify";

export const ToastError = (obj) => {
  const errors = obj?.error?.data?.errors;
  if (errors) {
    for (let key in errors) {
      toast.error(errors[key][0]);
    }
  }
};
