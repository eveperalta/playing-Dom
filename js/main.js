var dibujarGifts = function(data){
	var gift = "";
	var url = "";
	data.forEach(function(element){
		gift = element.images.downsized_large.url;
		url = element.bitly_gif_url;
		$("#elementos").append(armarTemplate(gift, url));
	});
}
var armarTemplate = function(gift, url){
	var t = "<div class = 'elemento'><img src='" + gift + "'/><a href='" + url +"'>Ver más</a></div>"
	return t
}

var ajaxGift = function(gift){
	$.ajax({
	url: "http://api.giphy.com/v1/gifs/search",
	type: "GET",
	datatype: "json",
	data : {
		q : gift,
		api_key : "dc6zaTOxFJmzC"
	}
})
.done(function(response){
	dibujarGifts(response.data);
	console.log(response);
	
})
.fail(function(){
	console.log("error");
});

}
$("#buscar-gift").click(function(event) {
	console.log("ok")
	$("#elementos").empty();
	var gift = $("#gift-text").val();
	ajaxGift(gift);
});
