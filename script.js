async function runSimulations() {
    let numDoors = parseInt(document.getElementById("numDoors").value);
    let numSimulations = parseInt(document.getElementById("simulations").value);
    let stayWins = 0;
    let switchWins = 0;

    for (let i = 0; i < numSimulations; i++) {
        let carDoor = Math.floor(Math.random() * numDoors);
        let choice = Math.floor(Math.random() * numDoors);

        // Monty opens a goat door
        let goatDoors = Array.from({ length: numDoors }, (_, i) => i).filter(d => d !== choice && d !== carDoor);
        let openedDoor = goatDoors[Math.floor(Math.random() * goatDoors.length)];

        // Result if staying
        if (choice === carDoor) stayWins++;

        // Result if switching
        let switchTo = Array.from({ length: numDoors }, (_, i) => i).filter(d => d !== choice && d !== openedDoor)[0];
        if (switchTo === carDoor) switchWins++;

        // Update visuals
        document.getElementById("stayWin").style.width = `${stayWins / (i + 1) * 100}%`;
        document.getElementById("stayWin").textContent = `Stay Wins: ${stayWins}`;

        document.getElementById("switchWin").style.width = `${switchWins / (i + 1) * 100}%`;
        document.getElementById("switchWin").textContent = `Switch Wins: ${switchWins}`;

        await new Promise(r => setTimeout(r, 250));  // This adds a delay of 1 second
    }
}

document.getElementById("simulations").addEventListener("input", function() {
    document.getElementById("simulationValue").textContent = this.value;
});
