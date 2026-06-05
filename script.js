let donationTotal = 3400000;

function updateDonations() {
  const increase = Math.floor(Math.random() * 2000);
  donationTotal += increase;

  document.getElementById("donationTotal").innerText =
    "$" + donationTotal.toLocaleString();
}

setInterval(updateDonations, 3000);
