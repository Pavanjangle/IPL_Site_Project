function redirectToPlayersPage() {
    window.location.href = 'player info.html';
}

function redirectTocskhtml() {
    window.location.href = 'Kolkata.html';
}

const players = [
    {
        "id": 1,
        "playerName": "Shubman Gill",
        "from": "KKR",
        "price": "1.8 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/352800/352812.6.jpg'></img>"
    },
    {
        "id": 2,
        "playerName": "Andre Russell",
        "from": "KKR",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png'></img>"
    },
    {
        "id": 3,
        "playerName": "Eoin Morgan",
        "from": "KKR",
        "price": "5.25 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2023/02/14130318/skysports-eoin-morgan-england_5816039.jpg'></img>"
    },
    {
        "id": 4,
        "playerName": "Sunil Narine",
        "from": "KKR",
        "price": "8.5 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320119.png'></img>"
    },
    {
        "id": 5,
        "playerName": "Pat Cummins",
        "from": "KKR",
        "price": "15.5 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://cricfit.com/wp-content/uploads/2023/06/2292.jpg'></img>"
    },
    {
        "id": 6,
        "playerName": "Varun Chakravarthy",
        "from": "KKR",
        "price": "4 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://www.kreedon.com/wp-content/uploads/2021/07/1600x960_1007392-varun-chakravarthy.jpg'></img>"
    },
    {
        "id": 7,
        "playerName": "Nitish Rana",
        "from": "KKR",
        "price": "3.4 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "Image": "<img src='https://kheltalk.com/wp-content/uploads/2023/05/Nitish-Rana-1.jpg'></img>"
    },
    {
        "id": 8,
        "playerName": "Dinesh Karthik",
        "from": "KKR",
        "price": "7.4 Cr",
        "isPlaying": true,
        "description": "Wicketkeeper-Batsman",
        "Image": "<img src='https://staticg.sportskeeda.com/editor/2023/02/c7925-16762831581149-1920.jpg'></img>"
    },
    {
        "id": 9,
        "playerName": "Rahul Tripathi",
        "from": "KKR",
        "price": "3.4 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "Image": "<img src='https://wikibio.in/wp-content/uploads/2023/01/Rahul-Tripathi.jpg'></img>"
    },
    {
        "id": 10,
        "playerName": "Kamlesh Nagarkoti",
        "from": "KKR",
        "price": "3.2 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://starsunfolded.com/wp-content/uploads/2018/01/Kamlesh-Nagarkoti.jpg'></img>"
    },
    {
        "id": 11,
        "playerName": "Lockie Ferguson",
        "from": "KKR",
        "price": "1.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/321200/321239.png'></img>"
    },
    {
        "id": 12,
        "playerName": "Prasidh Krishna",
        "from": "KKR",
        "price": "3.6 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "Image": "<img src='https://pbs.twimg.com/profile_images/1493970538875670533/VYoaS6zi_400x400.jpg'></img>"
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
