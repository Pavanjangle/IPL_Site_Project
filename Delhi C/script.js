function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Delhi.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Shikhar Dhawan",
        "from": "DC",
        "price": "10.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170660/shikhar-dhawan.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Prithvi Shaw",
        "from": "DC",
        "price": "5.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='prithvi_shaw.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='rishabh_pant.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Kagiso Rabada",
        "from": "DC",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Amit Mishra",
        "from": "DC",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='amit_mishra.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Axar Patel",
        "from": "DC",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='axar_patel.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Ishant Sharma",
        "from": "DC",
        "price": "1.1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='ishant_sharma.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Steve Smith",
        "from": "DC",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='steve_smith.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Marcus Stoinis",
        "from": "DC",
        "price": "4.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='marcus_stoinis.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Shimron Hetmyer",
        "from": "DC",
        "price": "1.7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shimron_hetmyer.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Kane Williamson",
        "from": "DC",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='kane_williamson.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Ripal Patel",
        "from": "DC",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ripal_patel.jpg'></img>"
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
            <p> ${player.Image}</p>
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
