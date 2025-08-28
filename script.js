// Initial counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// DOM elements
const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Heart icon functionality
document.querySelectorAll("[data-action='heart']").forEach(heart => {
  heart.addEventListener("click", () => {
    heartCount++;
    heartDisplay.textContent = heartCount;
  });
});