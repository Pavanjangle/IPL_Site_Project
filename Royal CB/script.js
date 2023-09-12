function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'royal.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "17 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://www.sportsindiashow.com/wp-content/uploads/2023/09/Virat-Kohli.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "AB de Villiers",
        "from": "RCB",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='ab_de_villiers.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "14.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='glenn_maxwell.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Yuzvendra Chahal",
        "from": "RCB",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='yuzvendra_chahal.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Mohammed Siraj",
        "from": "RCB",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mohammed_siraj.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Devdutt Padikkal",
        "from": "RCB",
        "price": "2.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='devdutt_padikkal.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Daniel Sams",
        "from": "RCB",
        "price": "3.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='daniel_sams.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Harshal Patel",
        "from": "RCB",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='harshal_patel.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Srikar Bharat",
        "from": "RCB",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='srikar_bharat.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "KS Bharat",
        "from": "RCB",
        "price": "1.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='ks_bharat.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Finn Allen",
        "from": "RCB",
        "price": "1.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='finn_allen.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Dushmantha Chameera",
        "from": "RCB",
        "price": "1.9 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='dushmantha_chameera.jpg'></img>"
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
