var userID = ""
function Login(e){
  e.preventDefault()
  userID = document.getElementById("Username").value;
  steamAPI(userID)
}
var steamAPI = (playerSummary) => {
  // preston steamkey 76561199006162307
  // tanners teamkey  76561198012252310
    // var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E";
    // var userID = "76561198024405122"; //temp changes
  
    console.log("UserID is:", userID);
    var playerSummary = `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=${userID}`;
    // console.log("Inside Steam api ", playerSummary);
    fetch(playerSummary, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/hal+json",
        // origin: {playerSummary}
        origin: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=${userID}`,
      },
    })
      .then((response) => {
        // console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log("Player Summary Data", data);

    var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E";
    // var userID = "76561198024405122";


        var personastateEl = data.response.players[0].personastate
        var updatedState = ""
        if (personastateEl = 0){
            updatedState = "Offline"
        } else if (personastateEl = 1) {
          updatedState = "Online"
        } else if (personastateEl = 2 ) {
          updatedState = "Busy"
        } else if (personastateEl = 3) {
          updatedState = "Away"
        } else if (personastateEl = 4) {
          updatedState = "Snooze"
        } else if (personastateEl = 5) {
          updatedState = "Looking to Trade"
        } else if (personastateEl = 6) {
          updatedState = "Looking to Play"
        };
        
        
        console.log("PersonaState is ", updatedState);


        var personaNameEl = data.response.players[0].personaname;
        var imgEl = data.response.players[0].avatarfull;
  
       
        console.log("Avatar is ", imgEl);
        console.log("Persona Name is ", personaNameEl);
        // var imgEL = document.getElementById("personaAvatar");
        // imgEL.setAttribute("src", data.response.players[0].avatar);
  
        //Steam API - Get Player Games
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
            // var sorted = playerGamesListData.response.games.sort(function (
            //   productA,
            //   productB
            // ) {
            //   if (productA.playtime_forever > productB.playtime_forever) {
            //     return -1;
            //   }
            //   if (productB.playtime_forever > productA.playtime_forever) {
            //     return 1;
            //   }
            //   return 0;
            // });
            // console.log("Sorted data is ", sorted);
            //top 5
            // for (let i = 0; i < playerGamesListData.length; i++) {
            //   if (playerGamesListData[4]) {
            //     playerGamesListData[4]++;
            //   }
            //   return playerGamesListData[4];
            // }
            // console.log(playerGamesListData[4]);
            // this player is online+
            // user info
            var display = document.getElementById ("player")
  display.innerHTML = `<p>This player is ${updatedState}</p>
                      <p>Player Name: ${personaNameEl}
  `
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // var button = document.getElementById("loginBtn")
  // button.addEventListener("click", Login)
  
// Random Fact API
var fact = document.getElementById("fact")
 fact.addEventListener("click", function (event) {
  // Checking if the button was clicked
  // if (!event.target.matches("#button")) return;
  JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    renderJoke(data)
  })
  // fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
  //   headers: {
  //     'x-rapidapi-key': 'ee4e3be362mshbdb524da36c209ap'
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((data) => {console.log(data) 
  //     renderJoke(data)})
});

function renderJoke(data) {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  setup.innerHTML = data?.setup|| data?.joke;
  punchline.innerHTML = data?.delivery|| null;
}

  // steamAPI();
  
//   var searchBtn = document.getElementsByClassName("btn");
//   console.log("btn", searchBtn[0]);
//   searchBtn[0].addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event);
//     steamAPI();
//   });
//   white_check_mark;
//   eyes;
//   raised_hands;
  
//   console.log("btn", searchBtn[0]);
  
//   searchBtn[0].addEventListener("click", (event) => {
//     event.preventDefault();
//     console.log(event);
//     steamAPI();
// });

