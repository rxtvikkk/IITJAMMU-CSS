// Object mapping holding all the statistic variations
const messiData = {
    total: { matches: "1,151", goals: "906", assists: "408" },
    barca: { matches: "778", goals: "672", assists: "303" },
    psg: { matches: "75", goals: "32", assists: "35" },
    miami: { matches: "100", goals: "86", assists: "29" },
    argentina: { matches: "198", goals: "116", assists: "41" }
};

// Function called whenever a user clicks a button
function updateStats(teamKey, buttonElement) {
    
    // 1. Remove the 'active' styling from all buttons, then add it to the clicked button
    const buttons = document.querySelectorAll('.btn-group button');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // 2. Fetch the corresponding dataset based on the team clicked
    const targetData = messiData[teamKey];

    // 3. Inject the new numbers straight into the HTML text boxes
    document.getElementById('stat-matches').innerText = targetData.matches;
    document.getElementById('stat-goals').innerText = targetData.goals;
    document.getElementById('stat-assists').innerText = targetData.assists;
}
