chrome.runtime.onInstalled.addListener(() => {
  console.log("I just installed my chome extension");
});

chrome.bookmarks.onCreated.addListener(() => {
  console.log("i Kust bookmarked this page");
});
