fetch("https://priceline-com.p.rapidapi.com/cars/location/search?q=Seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "priceline-com.p.rapidapi.com",
		"x-rapidapi-key": "a67d7060bcmshfe42d09a9420ddcp1067f2jsna444ee36a574"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});