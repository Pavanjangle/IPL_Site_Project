function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'LSG.html';
}

const players = [
    {
        "id": 1,
        "playerName": "KL Rahul",
        "from": "LSG",
        "price": "12 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://img.redbull.com/images/c_crop,w_1600,h_800,x_0,y_14,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/4/18/dzzrqdgdjp8xmidszpz5/kl-rahul-india-cricket-team-opening-batsman'></img>"
    },
    {
        "id": 2,
        "playerName": "Chris Gayle",
        "from": "LSG",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='chris_gayle.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Rishabh Pant",
        "from": "LSG",
        "price": "10 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='rishabh_pant.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Shardul Thakur",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='shardul_thakur.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Jonny Bairstow",
        "from": "LSG",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jonny_bairstow.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Kagiso Rabada",
        "from": "LSG",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='kagiso_rabada.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Shakib Al Hasan",
        "from": "LSG",
        "price": "6.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='shakib_al_hasan.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Shreyas Iyer",
        "from": "LSG",
        "price": "7 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='shreyas_iyer.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Trent Boult",
        "from": "LSG",
        "price": "7.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='trent_boult.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Mayank Agarwal",
        "from": "LSG",
        "price": "6.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='mayank_agarwal.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Andre Russell",
        "from": "LSG",
        "price": "9.2 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='andre_russell.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Mohammed Shami",
        "from": "LSG",
        "price": "5.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='mohammed_shami.jpg'></img>"
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
