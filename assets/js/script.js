var steamAPI = function(userID, playerSummary, playerStats) {

	// var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E"
	// var userID = '76561198024405122'
	// var userStats = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=${steamKey}&steamid=${userID}'

	var playerSummary =  'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=76561198024405122'

	// var userAchievements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=${steamKey}&steamid=${userID}'

	// fetch(userStats)

	// .then(function (response) {
	// 	if (response.ok) {
	// 		console.log(response);
	// 		response.json()

	// 		console.log(userStats);

	
	// 	}
	// })

	return fetch(playerSummary, {
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        console.log(response)
        return response.json()
    }).then(data => {
        console.log(data);
        // var videoId = data.items[0].id.videoId
        // var videoUrl = 'https://www.youtube.com/watch?v=' + videoId
        // var ytLink = document.createElement("a")
        // var link2Text = document.createTextNode("Game Tutorial")
        // ytLink.appendChild(link2Text)
        // ytLink.href = videoUrl
        // card.append(ytLink)
    }).catch(error => {
        console.error(error);
    });
};


steamAPI();

