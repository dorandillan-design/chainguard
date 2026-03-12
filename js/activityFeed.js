document.addEventListener("DOMContentLoaded", () => {

    const list = document.getElementById("activityList")

    if (!list) return

    const actions = [

        "Wallet Connected",
        "Transaction Validated",
        "Security Scan Completed",
        "Token Approval Verified",
        "Contract Interaction Detected",
        "Signature Confirmed",
        "Gas Optimization Applied"

    ]

    const chains = ["Ethereum", "Polygon", "BNB Chain"]

    function randomWallet() {

        const chars = "abcdef0123456789"

        let addr = "0x"

        for (let i = 0; i < 4; i++) addr += chars[Math.floor(Math.random() * chars.length)]

        addr += "..."

        for (let i = 0; i < 4; i++) addr += chars[Math.floor(Math.random() * chars.length)]

        return addr

    }

    function newActivity() {

        const li = document.createElement("li")

        li.className = "activity-item"

        const action = actions[Math.floor(Math.random() * actions.length)]
        const wallet = randomWallet()
        const chain = chains[Math.floor(Math.random() * chains.length)]

        li.innerHTML = `

<span class="activity-type">${action}</span>

<span class="activity-wallet">${wallet}</span>

<span class="activity-chain">${chain}</span>

`

        list.prepend(li)

        if (list.children.length > 10) {

            list.removeChild(list.lastChild)

        }

    }

    setInterval(newActivity, 2200)

})