'use strict'
var apiKey = '1da21aadb2d8a4a01756f791d66a9dc6';
var apiSecret = 'a9af45ac5f7059fc01ffadf7bb3ec8a9';
var cloneDetalhes = $('.detalhes-display').clone();
$(document).ready(function() {
    $(".details-list").empty();
    //Função adquirição de Variáveis Musica / Artista
    
    let params = (new URL(document.location)).searchParams;
    let artista = params.get('var2'); 
    let musica = params.get('var1'); 

    //Apresentação de detalhes de Musicas
    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+apiKey+"&artist="+artista+"&track="+musica+"&format=json"
    }).done(function(detalhes){
            console.log(detalhes);
            var liDetalhes  = cloneDetalhes.clone();
            $('.listeners',liDetalhes).text(detalhes.track.listeners);
            $('.title-music',liDetalhes).text(detalhes.track.name);
            $('.title-artist', liDetalhes).text(detalhes.track.artist.name);
            $('.title-album', liDetalhes).text(detalhes.track.album.title);
            $('#imagem-musica',liDetalhes).attr("src",detalhes.track.album.image[3]['#text']);
            $('.details-list').append(liDetalhes);
        })
        

});
$('#btnSearch').click(function(){
    var valorPesquisa = $('#pesquisa').val();

}); 

