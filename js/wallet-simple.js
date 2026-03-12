let provider;
let signer;

const connectBtn = document.getElementById("connectBtn");
const manualBtn = document.getElementById("manualBtn");
const manualBox = document.getElementById("manualBox");

const walletInfo = document.getElementById("walletInfo");

const addressEl = document.getElementById("address");
const networkEl = document.getElementById("network");

connectBtn.onclick = async () => {

    if (!window.ethereum) {
        alert("MetaMask not installed");
        return;
    }

    provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    const address = await signer.getAddress();
    const network = await provider.getNetwork();

    walletInfo.classList.remove("hidden");

    addressEl.textContent = address;
    networkEl.textContent = network.name;

};

manualBtn.onclick = () => {

    manualBox.classList.remove("hidden");

};

document.getElementById("manualConnect").onclick = () => {

    const addr = document.getElementById("manualAddress").value;

    try {

        const valid = ethers.getAddress(addr);

        walletInfo.classList.remove("hidden");

        addressEl.textContent = valid;
        networkEl.textContent = "Manual / Read Only";

    } catch {

        alert("Invalid address");

    }

};