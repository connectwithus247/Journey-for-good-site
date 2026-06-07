let donationTotal = 80000;
const donationGoal = 500000;

function updateDonations() {

    const increase = Math.floor(Math.random() * 300);

    donationTotal += increase;

    if (donationTotal > donationGoal) {
        donationTotal = donationGoal;
    }

    document.getElementById("donationTotal").innerText =
        "$" + donationTotal.toLocaleString();

    document.getElementById("donationProgress").value =
        donationTotal;

    const percent = (donationTotal / donationGoal) * 100;

    document.getElementById("progressText").innerText =
        percent.toFixed(1) + "% of goal reached";
}

updateDonations();

setInterval(updateDonations, 3000);
