import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/popup.css";
import { render } from "react-dom";

function Popup() {
  return (
    <div className="popup-container">
      <button className="popup-button">+</button>
      <button className="popup-button">-</button>
      <button className="popup-button">activate</button>
    </div>
  );
}
const container = document.getElementById("popup-component"); // or the ID for your options container
const root = createRoot(container);
root.render(<Popup />);

// const container = document.createElement("div");
// document.body.appendChild(container);
// const root = createRoot(container);
// root.render(PopUp);
