import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing #root element");
}

createRoot(root).render(
  <>
    <App />
    <Toaster position="bottom-center" />
  </>,
);
