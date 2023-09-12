function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Gt.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Jason Roy",
        "from": "GT",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://i.guim.co.uk/img/media/23e5fbe2828f475a5b7854c4ac64803f9c327155/0_5_2768_1662/master/2768.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=181b09e0c2e5206dc4916784360ddd25'></img>"
    },
    {
        "id": 2,
        "playerName": "Shreyas Iyer",
        "from": "GT",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shreyas_iyer.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Jos Buttler",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jos_buttler.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Rashid Khan",
        "from": "GT",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='rashid_khan.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='hardik_pandya.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Trent Boult",
        "from": "GT",
        "price": "7.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='trent_boult.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Sunil Narine",
        "from": "GT",
        "price": "6 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='sunil_narine.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Yuzvendra Chahal",
        "from": "GT",
        "price": "5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='yuzvendra_chahal.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Ben Stokes",
        "from": "GT",
        "price": "9.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='ben_stokes.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Eoin Morgan",
        "from": "GT",
        "price": "7.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='eoin_morgan.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Kagiso Rabada",
        "from": "GT",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Krunal Pandya",
        "from": "GT",
        "price": "6.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='krunal_pandya.jpg'></img>"
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
