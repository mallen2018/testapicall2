$("#find-comic").on("click", function (event) {

	event.preventDefault();
	var comic = $("#searchTerm").val().trim();
	var queryURL = "http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&callbackname=callback&appid=BrandenH-MarvelSi-PRD-6668815a4-427e2463&siteid=0&version=967&QueryKeywords=" + comic + "%20comic&AvailableItemsOnly=true&MaxEntries=10";

	$.ajaxPrefilter( function (options) {
		if (options.crossDomain && jQuery.support.cors) {
		  var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
		  options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
		  //options.url = "http://cors.corsproxy.io/url=" + options.url;
		}
	   });

	$.ajax({
		url: queryURL,
		method: "GET",
		
	})
		.then(function (callback) {

			var hotmess = $("<p>").text(callback.Timestamp);
			console.log(callback.Product[0]);
			$("#hotmessdisplay").prepend(hotmess);
			console.log(callback);
		});
});

