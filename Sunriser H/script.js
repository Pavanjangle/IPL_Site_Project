function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Sunriser.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Kane Williamson",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://d1af7m13b2f34i.cloudfront.net/media/kane-williamson-new-zealand-sportstiger-1691758846112-original.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Jonny Bairstow",
        "from": "SRH",
        "price": "2.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='jonny_bairstow.jpg'></img>"
    },
    {
        "id": 3,
        "playerName": "Rashid Khan",
        "from": "SRH",
        "price": "9 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='rashid_khan.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "T Natarajan",
        "from": "SRH",
        "price": "1 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='t_natarajan.jpg'></img>"
    },
    {
        "id": 5,
        "playerName": "Manish Pandey",
        "from": "SRH",
        "price": "11 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='manish_pandey.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Wriddhiman Saha",
        "from": "SRH",
        "price": "1.2 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='wriddhiman_saha.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Jason Holder",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='jason_holder.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Bhuvneshwar Kumar",
        "from": "SRH",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='bhuvneshwar_kumar.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Abdul Samad",
        "from": "SRH",
        "price": "20 L",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='abdul_samad.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Khaleel Ahmed",
        "from": "SRH",
        "price": "3 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='khaleel_ahmed.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Siddarth Kaul",
        "from": "SRH",
        "price": "3.8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='siddarth_kaul.jpg'></img>"
    },
    {
        "id": 12,
        "playerName": "Priyam Garg",
        "from": "SRH",
        "price": "1.9 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='priyam_garg.jpg'></img>"
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
