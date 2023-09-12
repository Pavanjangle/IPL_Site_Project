function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'csk.html';
}



const players = 
    [
        {
            "id": 1,
            "playerName": "MS Dhoni",
            "from": "CSK",
            "price": "15 Cr",
            "isPlaying": true,
            "description": "Wicketkeeper-Batsman",
            "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png'></img>"
        },
        {
            "id": 2,
            "playerName": "Suresh Raina",
            "from": "CSK",
            "price": "11 Cr",
            "isPlaying": true,
            "description": "Batsman",
            "Image": "<img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c148324/suresh-raina.jpg'></img>"
        },
        {
            "id": 3,
            "playerName": "Ravindra Jadeja",
            "from": "CSK",
            "price": "7 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png'></img>"
        },
        {
            "id": 4,
            "playerName": "Faf du Plessis",
            "from": "CSK",
            "price": "1.6 Cr",
            "isPlaying": true,
            "description": "Batsman",
            "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png'></img>"
        },
        {
            "id": 5,
            "playerName": "Deepak Chahar",
            "from": "CSK",
            "price": "2 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "Image": "<img src='https://www.mykhel.com/thumb/247x100x233/cricket/players/9/5059.jpg'></img>"
        },
        {
            "id": 6,
            "playerName": "Ambati Rayudu",
            "from": "CSK",
            "price": "2.2 Cr",
            "isPlaying": true,
            "description": "Batsman",
            "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316499.png'></img>"
        },
        {
            "id": 7,
            "playerName": "Imran Tahir",
            "from": "CSK",
            "price": "1 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/898.png'></img>"
        },
        {
            "id": 8,
            "playerName": "Sam Curran",
            "from": "CSK",
            "price": "5.5 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "Image": "<img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c244812/sam-curran.jpg'></img>"
        },
        {
            "id": 9,
            "playerName": "Dwayne Bravo",
            "from": "CSK",
            "price": "6.4 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/playerheadshot/ipl/284/25.png'></img>"
        },
        {
            "id": 10,
            "playerName": "Shardul Thakur",
            "from": "CSK",
            "price": "2.6 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "Image": "<img src='https://static.toiimg.com/photo/msid-74174942/74174942.jpg'></img>"
        },
        {
            "id": 11,
            "playerName": "Josh Hazlewood",
            "from": "CSK",
            "price": "2 Cr",
            "isPlaying": true,
            "description": "Bowler",
            "Image": "<img src='https://i.guim.co.uk/img/media/41eac396bac9673b3638b494ba41fa4673a9a079/0_214_7515_4510/master/7515.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=dd030709e0cf1446940b234514f6370a'></img>"
        },
        {
            "id": 12,
            "playerName": "Moeen Ali",
            "from": "CSK",
            "price": "7 Cr",
            "isPlaying": true,
            "description": "All-rounder",
            "Image": "<img src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c244796/moeen-ali.jpg'></img>"
        }
    ];
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
            <p style="height: 100px" width: 100px> ${player.Image}</p>
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
