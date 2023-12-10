import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../assets/popup.css";

function Popup() {
  const [speed, setSpeed] = useState<number>(10);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const sendMessage = (message: { command: string; speed?: number }) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  };

  const handleScroll = () => {
    if (isScrolling) {
      setIsScrolling(false);
      sendMessage({ command: "stop" });
    } else {
      setIsScrolling(true);
      sendMessage({ command: "start", speed });
    }
  };
  const increaseSpeed = () => {
    setSpeed((prev) => prev + 10);
    sendMessage({ command: "increase-speed", speed });
  };
  const decreaseSpeed = () => {
    speed <= 10 ? 0 : setSpeed((prev) => prev - 10);
    sendMessage({ command: "decrease-speed", speed });
  };

  return (
    <div className="popup-container">
      <button className="popup-button" onClick={increaseSpeed}>
        +
      </button>
      <button className="popup-button" onClick={decreaseSpeed}>
        -
      </button>
      <button className="popup-button" onClick={handleScroll}>
        {isScrolling ? "Stop" : "Activate"}
      </button>
    </div>
  );
}
const container = document.getElementById("popup-component"); // or the ID for your options container
const root = createRoot(container);
root.render(<Popup />);
