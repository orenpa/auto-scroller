import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import { render } from "react-dom";

function Options() {
  return (
    <div>
      <h1 className="text-3xl text-green-500">Options</h1>
    </div>
  );
}

const container = document.getElementById("options-component");
const root = createRoot(container);
root.render(<Options />);
