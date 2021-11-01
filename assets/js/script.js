var steamAPI = playerSummary => {

	var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E"
	var userID = "76561198024405122"

	var playerSummary =  
	
	"https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key='steamKey'&steamids=76561198024405122"

	console.log("Inside Stream api ", playerSummary); 

	fetch(playerSummary, {
		method: 'GET', 
		credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/hal+json',
			'origin': 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4F3B76E047AA7DDB2C31FE9E7A61DD0E&steamids=76561198024405122'
        },
    }).then(response => {
        // console.log(response)
        return response.json()
    }).then(data => {
        console.log(data);

    }).catch(error => {
        console.error(error);
    });
	};


steamAPI();
}

console.log(userStats);

steamAPI();
