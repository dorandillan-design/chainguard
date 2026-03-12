/* ================= TERMINAL SCANNER ================= */

document.addEventListener("DOMContentLoaded", () => {

    const terminal = document.getElementById("terminalOutput");

    if (!terminal) return;

    const logs = [

        "> Initializing ChainGuard security engine...",
        "> Establishing RPC connection...",
        "> Loading wallet validation module...",
        "> Checking signature authenticity...",
        "> Scanning transaction permissions...",
        "> Inspecting smart contract calls...",
        "> Verifying gas parameters...",
        "> Detecting malicious approvals...",
        "> Multichain environment detected...",
        "> Running cross-chain vulnerability scan...",
        "> Validating wallet entropy...",
        "> Inspecting token allowances...",
        "> Signature integrity confirmed",
        "> Security scan completed successfully"

    ];

    function randomWallet() {

        const chars = "abcdef0123456789";
        let addr = "0x";

        for (let i = 0; i < 6; i++) {
            addr += chars[Math.floor(Math.random() * chars.length)];
        }

        addr += "...";

        for (let i = 0; i < 4; i++) {
            addr += chars[Math.floor(Math.random() * chars.length)];
        }

        return addr;

    }

    function typeLine(text) {

        let line = document.createElement("div");
        line.className = "terminal-line";

        terminal.appendChild(line);

        let i = 0;

        function typing() {

            if (i < text.length) {

                line.textContent += text.charAt(i);
                i++;

                setTimeout(typing, 25);

            }

        }

        typing();

        terminal.scrollTop = terminal.scrollHeight;

    }

    function addRandomLog() {

        let walletScan = "> scanning wallet " + randomWallet();

        typeLine(walletScan);

        setTimeout(() => {

            let message = logs[Math.floor(Math.random() * logs.length)];

            typeLine(message);

        }, 400);

    }

    setInterval(addRandomLog, 2000);

});