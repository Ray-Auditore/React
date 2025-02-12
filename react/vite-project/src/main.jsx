import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ShoppingCard from "./meeting9/praktek/praktek1.jsx";
import SimpleNameList from "./meeting9/updateState.jsx";
import UpdateStateWithMap from "./meeting9/updateState2.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UpdateStateWithMap/>
  </StrictMode>
);
