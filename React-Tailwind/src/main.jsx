import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShoppingCard from "./meeting13/praktek/no2.jsx";
import Axioshop from "./meeting14/soal/soal2.jsx";
import SimpleUserForm from "./meeting15/coba/coba.jsx";
import LoginForm from "./meeting15/soal/no1.jsx";
import Axioshop2 from "./meeting15/soal/soal2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Axioshop2 />
  </StrictMode>
);
