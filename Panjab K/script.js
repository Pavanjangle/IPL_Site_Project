function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'panjab.html';
}

const players = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "PK",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://img.redbull.com/images/c_crop,w_1600,h_800,x_0,y_14,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/4/18/dzzrqdgdjp8xmidszpz5/kl-rahul-india-cricket-team-opening-batsman'></img>"
    },
    {
        "id": 2,
        "playerName": "Chris Gayle",
        "from": "PK",
        "price": "2 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='chris_gayle.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Mayank Agarwal",
        "from": "PK",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='mayank_agarwal.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Nicholas Pooran",
        "from": "PK",
        "price": "4.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='nicholas_pooran.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Mohammed Shami",
        "from": "PK",
        "price": "4.8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mohammed_shami.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Shahrukh Khan",
        "from": "PK",
        "price": "5.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='shahrukh_khan.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Jhye Richardson",
        "from": "PK",
        "price": "14 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='jhye_richardson.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Riley Meredith",
        "from": "PK",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='riley_meredith.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Mandeep Singh",
        "from": "PK",
        "price": "1.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='mandeep_singh.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Murugan Ashwin",
        "from": "PK",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='murugan_ashwin.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Fabian Allen",
        "from": "PK",
        "price": "75 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='fabian_allen.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Arshdeep Singh",
        "from": "PK",
        "price": "1.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='arshdeep_singh.jpg'></img>"
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
            <p>${player.description}</p>
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
