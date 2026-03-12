let provider;
let signer;

const openBtn = document.getElementById("openWalletModal");
const modal = document.getElementById("walletModal");

const metamaskOption = document.getElementById("metamaskOption");
const manualOption = document.getElementById("manualOption");

const manualBox = document.getElementById("manualBox");

const walletPill = document.getElementById("wallet-pill");
const walletShort = document.getElementById("wallet-short");

/* open modal */

openBtn.onclick = () => {

    modal.classList.remove("hidden");

};

/* connect metamask */

metamaskOption.onclick = async () => {

    if (!window.ethereum) {

        alert("MetaMask not installed");

        return;

    }

    provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    const address = await signer.getAddress();

    walletShort.textContent =
        address.slice(0, 6) + "..." + address.slice(-4);

    walletPill.classList.remove("hidden");

    modal.classList.add("hidden");

};

/* manual connect */

manualOption.onclick = () => {

    manualBox.classList.remove("hidden");

};

document.getElementById("manualConnect").onclick = () => {

    const addr = document.getElementById("manualAddress").value;

    try {

        const valid = ethers.getAddress(addr);

        walletShort.textContent =
            valid.slice(0, 6) + "..." + valid.slice(-4);

        walletPill.classList.remove("hidden");

        modal.classList.add("hidden");

    } catch {

        alert("Invalid address");

    }

};