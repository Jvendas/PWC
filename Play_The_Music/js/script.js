'use strict'
var cloneMedia = $('.media').clone();

$('#btSearch').on('click', function(){

	var valorPesquisa = $('#campoPesquisa').val();

	$.ajax({
		method:"GET",
		url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track="+valorPesquisa+"&api_key=baf535afdac7a75b4bde8a3b90721d9b&format=json"
	}).done(function(msg){
		console.log('msg');
		console.log(msg);


		msg.search.forEach(function(result){
			var liMedia= cloneMedia.clone();
			$('#imagem', liMedia).attr("src", result.image);
			$('.title', liMedia).text(result.name);
			$('.ano', liMedia).text(result.artist);
			$('.tipo',liMedia).text(result.Type);
			$('.media-list').append(liMedia);
		})
	})

});	