const donationTotal = 80000;
const donationGoal = 500000;

document.getElementById("donationTotal").innerText =
    "$" + donationTotal.toLocaleString();

document.getElementById("donationProgress").value =
    donationTotal;

document.getElementById("progressText").innerText =
    ((donationTotal / donationGoal) * 100).toFixed(1) +
    "% of goal reached";
