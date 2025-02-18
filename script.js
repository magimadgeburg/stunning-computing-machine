document.getElementById("flipCoins").addEventListener("click", function() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    let hexagram = [];
    let changingLines = [];
    let binarySequence = [];

    function getLine() {
        let coin1 = Math.random() < 0.5 ? 2 : 3;
        let coin2 = Math.random() < 0.5 ? 2 : 3;
        let coin3 = Math.random() < 0.5 ? 2 : 3;
        let sum = coin1 + coin2 + coin3;

        if (sum === 6) { 
            hexagram.push("— — X  (Changing Yin)");
            changingLines.push(0);
            binarySequence.push(0);
        } else if (sum === 7) { 
            hexagram.push("———  (Yang)");
            binarySequence.push(1);
        } else if (sum === 8) { 
            hexagram.push("— —  (Yin)");
            binarySequence.push(0);
        } else if (sum === 9) { 
            hexagram.push("——— O  (Changing Yang)");
            changingLines.push(1);
            binarySequence.push(1);
        }
    }

    function delayPrint(text, delay) {
        setTimeout(() => {
            outputDiv.innerHTML += text + "\n";
            outputDiv.scrollTop = outputDiv.scrollHeight; // Auto-scroll
        }, delay);
    }

    delayPrint("███████████████████████████", 200);
    delayPrint("▌   THE INNER HEXAGRAM    ▐", 400);
    delayPrint("███████████████████████████", 600);
    delayPrint("> SYSTEM BOOT...", 1000);
    delayPrint("> WELCOME TO THE ORACLE INTERFACE", 1300);
    delayPrint("> INITIATING DIVINATION PROTOCOL...", 1600);
    delayPrint("░░ FLIPPING COINS... PLEASE WAIT ░░", 1900);

    setTimeout(() => {
        for (let i = 0; i < 6; i++) {
            getLine();
        }

        let hexNumber = parseInt(binarySequence.join(""), 2) + 1; // Convert binary to decimal
        let hexagramOutput = hexagram.reverse().join("\n"); // I Ching hexagrams are read from bottom to top

        delayPrint(`\n>>> PRIMARY HEXAGRAM: ${hexNumber}`, 2500);
        delayPrint(hexagramOutput, 2700);
        delayPrint("\n📡 MIND’S WEATHER REPORT 🌩️", 2900);
        delayPrint("────────────────────────────", 3100);
        delayPrint("🌪️ **Conditions:** Shifting energies detected.", 3300);
        delayPrint("⚠️ **Advisory:** Observe without resistance.", 3500);
        delayPrint("🌊 **Movement:** Flow with the unfolding moment.", 3700);
        delayPrint("\n> SYSTEM STANDING BY...", 3900);
        delayPrint("> PRESS FLIP COINS TO INITIATE ANOTHER QUERY", 4100);
    }, 2200);
});
