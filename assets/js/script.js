// animation - t

$(document).ready(function () {
	function detect_active() {
	  // get active
	  var get_active = $("#dp-slider .dp_item:first-child").data("class");
	  $("#dp-dots li").removeClass("active");
	  $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
	}
	$("#dp-next").click(function () {
	  var total = $(".dp_item").length;
	  $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
	  $.each($(".dp_item"), function (index, dp_item) {
		$(dp_item).attr("data-position", index + 1);
	  });
	  detect_active();
	});
  
	$("#dp-prev").click(function () {
	  var total = $(".dp_item").length;
	  $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
	  $.each($(".dp_item"), function (index, dp_item) {
		$(dp_item).attr("data-position", index + 1);
	  });
  
	  detect_active();
	});
  
	$("#dp-dots li").click(function () {
	  $("#dp-dots li").removeClass("active");
	  $(this).addClass("active");
	  var get_slide = $(this).attr("data-class");
	  console.log(get_slide);
	  $("#dp-slider .dp_item[data-class=" + get_slide + "]")
		.hide()
		.prependTo("#dp-slider")
		.fadeIn();
	  $.each($(".dp_item"), function (index, dp_item) {
		$(dp_item).attr("data-position", index + 1);
	  });
	});
  
	$("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
	  var get_slide = $(this).attr("data-class");
	  console.log(get_slide);
	  $("#dp-slider .dp_item[data-class=" + get_slide + "]")
		.hide()
		.prependTo("#dp-slider")
		.fadeIn();
	  $.each($(".dp_item"), function (index, dp_item) {
		$(dp_item).attr("data-position", index + 1);
	  });
  
	  detect_active();
	});
  });
  

var steamAPI = function(userID, playerSummary, playerStats, ) {

	var steamKey = "4F3B76E047AA7DDB2C31FE9E7A61DD0E"
	// var userID = document.getElementById
	var userStats = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=440&key=${steamKey}&steamid=${userID}'

	var playerSummary = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=%{steamKey}&steamids=${userID}'

	var userAchievements = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=440&key=${steamKey}&steamid=${userID}'

}

// end of animation -t

console.log(userStats);

steamAPI();



