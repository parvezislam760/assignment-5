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

  // Copy button
  document.querySelectorAll("[data-action='copy']").forEach(copyBtn => {
    copyBtn.addEventListener("click", () => {
      const card = copyBtn.closest(".servie-card");
      const number = card.querySelector("[data-role='service-number']").textContent;

      navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        copyDisplay.textContent = copyCount;
        alert(`নাম্বার কপি হয়েছে: ${number}`);
      });
    });
  });

  // Call button functionality
  document.querySelectorAll("[data-action='call']").forEach(callBtn => {
  callBtn.addEventListener("click", () => {
    const card = callBtn.closest(".servie-card");
    if (!card) {
      console.error("Card পাওয়া যায়নি!");
      return;
    }

    const serviceName = card.querySelector("[data-role='service-name']").textContent;
    const serviceNumber = card.querySelector("[data-role='service-number']").textContent;

    if (coinCount < 20) {
      alert("আপনার কাছে পর্যাপ্ত কয়েন নেই। কল করা যাবে না।");
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    const time = new Date().toLocaleTimeString('en-US', {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });

    const li = document.createElement("li");
    li.className = "bg-green-100 p-2 flex justify-between";
    li.innerHTML =
    `<div>
    <strong>${serviceName}</strong><br>${serviceNumber}
    </div>
    <div>${time}</div>`;
    historyList.appendChild(li);
    });
  });

  //   Clear History
  clearHistoryBtn.addEventListener("click",() => {
    historyList.innerHTML="";
  });
