'use strict'
var apiKey = '1da21aadb2d8a4a01756f791d66a9dc6';
var apiSecret = 'a9af45ac5f7059fc01ffadf7bb3ec8a9';
var pais = 'Portugal';
var cloneMusicas = $('.music-display').clone();
var cloneArtistas = $('.artist-display').clone();
var cloneAlbuns = $('.album-display').clone();
var cloneTop = $('.top-display').clone();

$('#pesquisa-musicas').hide();
$('#pesquisa-artistas').hide();
$('#pesquisa-albuns').hide();

//Apresentação de top Musicas
$(document).ready(function() {
    $(".top-list").empty();
    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country="+pais+"&api_key="+apiKey+"&format=json&limit=10"
    }).done(function(top){
        top.tracks.track.forEach(function(result){
            var liTop  = cloneTop.clone();
            $('.title-music',liTop).text(result.name);
            $('.title-artist', liTop).text(result.artist.name);
            $('.pagina-detalhes', liTop).prop("href","./detalhes.html?var1="+result.name+"&var2="+result.artist.name);
            $('.top-list').append(liTop);
        })
    })
    
});

       
//Pesquisa
$('#btnSearch').click(function(){

    var valorPesquisa = $('#pesquisa').val();
    $('#top-musicas').hide();
    $('.panel-title-musicas').text('Resultados de Músicas para "'+ valorPesquisa + '"');
    $('.panel-title-artistas').text('Resultados de Artistas para "'+ valorPesquisa + '"');
    $('.panel-title-albuns').text('Resultados de Albuns para "'+ valorPesquisa + '"');
    $(".music-list").empty();
    $(".artist-list").empty();
    $(".album-list").empty();
    $('#pesquisa-artistas').show();
    $('#pesquisa-musicas').show();
    $('#pesquisa-albuns').show();
    


        //Pesquisar Artistas
    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=artist.search&artist="+valorPesquisa+"&api_key="+apiKey+"&format=json&limit=5"
    }).done(function(artistas){
        artistas.results.artistmatches.artist.forEach(function(result){
            var liArtista  = cloneArtistas.clone();
            $('.title-artista',liArtista).text(result.name);
            //$('.', liMusica).text(result.artist);   
            $('.artist-list').append(liArtista);
        })
    })

        //Pesquisar Albuns
    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=album.search&album="+valorPesquisa+"&api_key="+apiKey+"&format=json&limit=5"
    }).done(function(albuns){
        albuns.results.albummatches.album.forEach(function(result){
            var liAlbum  = cloneAlbuns.clone();
            $('.title-album',liAlbum).text(result.name);
            //$('.', liMusica).text(result.artist);   
            $('.album-list').append(liAlbum);
        })
    })

        //Pesquisar Musicas
    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track="+valorPesquisa+"&api_key="+apiKey+"&format=json&limit=10"
    }).done(function(musicas){
        musicas.results.trackmatches.track.forEach(function(result){
            var liMusica  = cloneMusicas.clone();
            $('.title-musica',liMusica).text(result.name);
            $('.artista-musica', liMusica).text(result.artist);
            $('.pagina-detalhes', liMusica).prop("href","./detalhes.html?var1="+result.name+"&var2="+result.artist);
            $('.music-list').append(liMusica);
        })
    })

});