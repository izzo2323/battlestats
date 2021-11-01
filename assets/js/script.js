var steamAPI = function(userID, playerSummary, playerStats, ) {

	var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E"
	// var userID = document.getElementById
	var userStats = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=${steamKey}&steamid=${userID}'

	var playerSummary = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=%{steamKey}&steamids=${userID}'

	var userAchievements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=${steamKey}&steamid=${userID}'

}

console.log(userStats);

steamAPI();