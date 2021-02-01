'use strict'
var apiKey = '1da21aadb2d8a4a01756f791d66a9dc6';
var apiSecret = 'a9af45ac5f7059fc01ffadf7bb3ec8a9';
var cloneFavoritos = $('.favoritos-display').clone();
$("#favoritos").attr("href", "./favoritos.html")
$("#favoritos").text("Favoritos")


for (var i = 0; i < localStorage.length; i++){
    var musica =localStorage.key(i);
    if (musica=="pass" || musica=="email"){

    }else{
        $(".details-list").empty();
        $.ajax({
            method:"GET",
            url:"http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+localStorage.getItem(localStorage.key(i))+"&track="+musica+"&format=json"
        }).done(function(favoritos){
            console.log(favoritos);
            var liFavoritos  = cloneFavoritos.clone();
            $('.title-music',liFavoritos).text(favoritos.track.name);
            $('.title-artist', liFavoritos).text(favoritos.track.artist.name);
            $('.title-album', liFavoritos).text(favoritos.track.album.title);
            $('.top-tag', liFavoritos).text(favoritos.track.toptags.tag[0]["name"]);
            $('#imagem-musica',liFavoritos).attr("src",favoritos.track.album.image[3]['#text']);
            $('#remover-fav',liFavoritos).attr("class",musica);  
            $('.details-list').append(liFavoritos);                            
      
 
        })    
    }

}
function remover_musica(musica){
    localStorage.removeItem(musica);
    console.log(musica)
}
$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() <= 1280) { 
        $('select').show();
        $('#nav-list').hide();
    }
});