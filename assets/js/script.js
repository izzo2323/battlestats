var steamAPI = (playerSummary) => {
  var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E";
  var userID = document.getElementById("username").value;

  console.log("UserID is:", userID);

  var playerSummary = `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=${userID}`;

  console.log("Inside Stream api ", playerSummary);

  fetch(playerSummary, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/hal+json",
      origin: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=${userID}`,
    },
  })
    .then((response) => {
      // console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log("Player SUmmmary Data", data);

      ///Steam API - Get Player Games
      var getPlayerGamesList = `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?&include_appinfo=true&include_played_free_games=true&key=${steamKey}&steamid=${userID}&format=json`;

      fetch(getPlayerGamesList, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/hal+json",
          origin: `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?&include_appinfo=true&include_played_free_games=true&key=${steamKey}&steamid=${userID}&format=json`,
        },
      })
        .then((achievemntResponse) => {
          // console.log(response)
          return achievemntResponse.json();
        })
        .then((playerGamesListData) => {
          console.log("get player Game list", playerGamesListData);

          //   console.log(
          //     "Sorting data in Array ",
          //     playerGamesListData.response.games
          //   );
          //76561198024405122
          //Sorting data in an Array to show top played games
          var sorted = playerGamesListData.response.games.sort(function (
            productA,
            productB
          ) {
            if (productA.playtime_forever > productB.playtime_forever) {
              return -1;
            }
            if (productB.playtime_forever > productA.playtime_forever) {
              return 1;
            }
            return 0;
          });
          console.log("Sorted data is ", sorted);

          //top 5

          for (let i = 0; i < playerGamesListData.length; i++) {
            if (playerGamesListData[4]) {
              playerGamesListData[4]++;
            }
            return playerGamesListData[4];
          }
          console.log(playerGamesListData[4]);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
};

steamAPI();

var searchBtn = document.getElementsByClassName("btn");

console.log("btn", searchBtn[0]);

searchBtn[0].addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  steamAPI();
});
