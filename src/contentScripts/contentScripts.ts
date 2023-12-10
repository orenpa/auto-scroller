//implementation of the actual scrolling
let scrollInterval = null;

const startScroll = (speed) => {
  stopScroll();
  scrollInterval = setInterval(() => {
    window.scrollBy(0, speed);
  }, 1000);
};

const stopScroll = () => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.command) {
    case "start":
      startScroll(request.speed);
      break;
    case "stop":
      stopScroll();
      break;
    case "increase-speed":
      startScroll(request.speed);
    case "decrease-speed":
      request.speed === 0 ? stopScroll() : startScroll(request.speed);
  }
});
