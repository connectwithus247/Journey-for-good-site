const currentAmount = 80000;
const goal = 150000;

document.getElementById("donationTotal").textContent =
  "$" + currentAmount.toLocaleString();

document.getElementById("progressText").textContent =
  ((currentAmount / goal) * 100).toFixed(1) + "% of goal reached";
