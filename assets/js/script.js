var steamAPI = function(playerSummary) {

	// var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E"
	// var userID = '76561198024405122'
	// var userStats = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=${steamKey}&steamid=${userID}'

	var playerSummary =  'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=76561198024405122'

	// var userAchievements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=${steamKey}&steamid=${userID}'

	fetch(playerSummary)

	.then(function (response) {
		if (response.ok) {
			console.log("Resonse OK", response);
			response.json()

			console.log(playerSummary);

	
		}
	})

	console.log("Inside Stream api ", playerSummary); 

	fetch(playerSummary, {
		// mode: 'no-cors',
		method: 'GET', 
		credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
        },
    }).then(response => {
        console.log(response.body)
        return response.json()
    }).then(data => {
        console.log(data);

    }).catch(error => {
        console.error(error);
    });
};


steamAPI();

