import React from "react";
import { Provider, ToastPortal } from "@dsx/react";

const ToastProvider = ({ children }) => {
  return (
    <Provider locale="en-US" toastPortal={() => <ToastPortal />}>
      {children}
    </Provider>
  );
};

export default ToastProvider;
