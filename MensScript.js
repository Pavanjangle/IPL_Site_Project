
const players = [
   
    { name: "Virat Kohli", age: 32, team: "RCB" },
    { name: "Rohit Sharma", age: 34, team: "MI" },
    { name: "MS Dhoni", age: 39, team: "CSK" },
    { name: "KL Rahul", age: 29, team: "PBKS" },
    { name: "Shikhar Dhawan", age: 35, team: "DC" },
    { name: "David Warner", age: 34, team: "SRH" },
    { name: "Steve Smith", age: 32, team: "DC" },
    { name: "Rishabh Pant", age: 23, team: "DC" },
    { name: "Jasprit Bumrah", age: 27, team: "MI" },
    { name: "Kagiso Rabada", age: 26, team: "DC" },
    { name: "Andre Russell", age: 33, team: "KKR" },
    { name: "Hardik Pandya", age: 28, team: "MI" },
    { name: "Sunil Narine", age: 33, team: "KKR" },
    { name: "AB de Villiers", age: 37, team: "RCB" },
    { name: "Chris Gayle", age: 41, team: "PBKS" },
    { name: "Kieron Pollard", age: 34, team: "MI" },
    { name: "Ravindra Jadeja", age: 32, team: "CSK" },
    { name: "Yuzvendra Chahal", age: 30, team: "RCB" },
    { name: "Bhuvneshwar Kumar", age: 31, team: "SRH" },
    { name: "Prithvi Shaw", age: 21, team: "DC" },
    { name: "Suryakumar Yadav", age: 31, team: "MI" },
    { name: "Shreyas Iyer", age: 26, team: "KKR" },
    { name: "Jos Buttler", age: 30, team: "RR" },
    { name: "Sanju Samson", age: 26, team: "RR" },
    { name: "Ajinkya Rahane", age: 33, team: "RCB" },
    { name: "Mayank Agarwal", age: 30, team: "PBKS" },
    { name: "Eoin Morgan", age: 35, team: "KKR" },
    { name: "Shimron Hetmyer", age: 24, team: "RCB" },
    { name: "Ishan Kishan", age: 23, team: "MI" },
    { name: "Rashid Khan", age: 22, team: "SRH" },
    { name: "Quinton de Kock", age: 28, team: "MI" },
    { name: "Pat Cummins", age: 28, team: "KKR" },
    { name: "Faf du Plessis", age: 36, team: "CSK" },
    { name: "Dinesh Karthik", age: 35, team: "KKR" },
    { name: "Jofra Archer", age: 26, team: "RR" },
    { name: "Shardul Thakur", age: 29, team: "CSK" },
    { name: "Rahul Chahar", age: 22, team: "MI" },
    { name: "Axar Patel", age: 27, team: "DC" },
    { name: "Ravi Ashwin", age: 35, team: "DC" },
    { name: "Deepak Chahar", age: 28, team: "CSK" },
    { name: "Mohammad Shami", age: 30, team: "PBKS" },
    { name: "Trent Boult", age: 31, team: "MI" },
    { name: "Ambati Rayudu", age: 35, team: "CSK" },
    { name: "Nitish Rana", age: 27, team: "KKR" },
    { name: "Harshal Patel", age: 30, team: "RCB" },
    { name: "Shubman Gill", age: 22, team: "KKR" },
    { name: "Marcus Stoinis", age: 32, team: "DC" },
    { name: "Kyle Jamieson", age: 27, team: "RCB" },
    { name: "Chris Morris", age: 34, team: "RR" },
    { name: "Glenn Maxwell", age: 33, team: "RCB" },
    { name: "Imran Tahir", age: 42, team: "CSK" },
    { name: "Moeen Ali", age: 34, team: "CSK" },
    { name: "Krunal Pandya", age: 30, team: "MI" },
    { name: "Manish Pandey", age: 32, team: "SRH" },
    { name: "Wriddhiman Saha", age: 36, team: "SRH" },
    { name: "David Miller", age: 32, team: "RR" },
    { name: "Jason Holder", age: 29, team: "SRH" }
];


function searchPlayer(name) {
    return players.find(player => player.name.toLowerCase() === name.toLowerCase());
}


function displayPlayerInfo(player) { 
    const playerInfoElement = document.getElementById('player-info');
    if (player) {
        playerInfoElement.innerHTML = `
            <h2  style="color: white; margin-top: 17px; margin-left: 20px; font-size: 30px;">${player.name}</h2>
            <p style="color: white; margin-top: 0px; margin-left: 20px; font-size: 20px;">Age: ${player.age}</p>
            <p style="color: white; margin-top: 0px; margin-left: 20px; font-size: 20px;">Team: ${player.team}</p>
        `;
    } else {
        playerInfoElement.innerHTML = "<p style='color: white; margin-top: 30px; margin-left: 20px;  font-size: 20px;'>Player Not Found<br>Or check spelling</p>";
    }
}


document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input');
    const playerName = searchInput.value.trim();
    const foundPlayer = searchPlayer(playerName);
    displayPlayerInfo(foundPlayer);
});