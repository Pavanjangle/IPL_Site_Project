function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'rajstan.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Sanju Samson",
        "from": "RR",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://images.indianexpress.com/2023/09/Sanju-Samson.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Jos Buttler",
        "from": "RR",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jos_buttler.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Chris Morris",
        "from": "RR",
        "price": "16.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='chris_morris.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Ben Stokes",
        "from": "RR",
        "price": "12.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ben_stokes.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Shreyas Gopal",
        "from": "RR",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='shreyas_gopal.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Rahul Tewatia",
        "from": "RR",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='rahul_tewatia.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Jaydev Unadkat",
        "from": "RR",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='jaydev_unadkat.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "David Miller",
        "from": "RR",
        "price": "75 L",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='david_miller.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Yashasvi Jaiswal",
        "from": "RR",
        "price": "2.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='yashasvi_jaiswal.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Kartik Tyagi",
        "from": "RR",
        "price": "1.3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kartik_tyagi.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Mustafizur Rahman",
        "from": "RR",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mustafizur_rahman.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Mayank Markande",
        "from": "RR",
        "price": "20 L",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mayank_markande.jpg'></img>"
    }
]


let currentPlayerIndex = 0;

function showPlayerInfo() {
    const player = players[currentPlayerIndex];
    const playerInfoElement = document.getElementById('playerInfo');

    if (player) {
        playerInfoElement.innerHTML = `
            <h2>${player.playerName}</h2>
            <p>Team: ${player.from}</p>
            <p>Price: ${player.price}</p>
            <p>Playing: ${player.isPlaying ? 'Yes' : 'No'}</p>
            <p> ${player.description}</p>
            <p>${player.Image}</p>
        `;
    } else {
        playerInfoElement.innerHTML = '<h2>No more players in this team<br>Please Click Back To Page</h2>';
    }

    currentPlayerIndex++;
}

function showNextPlayer() {
    const playerInfoElement = document.getElementById('playerInfo');
    playerInfoElement.innerHTML = '';
    showPlayerInfo();
}
