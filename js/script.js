'use strict'
    // define api keys
var apiKey = '1da21aadb2d8a4a01756f791d66a9dc6';
var apiSecret = 'a9af45ac5f7059fc01ffadf7bb3ec8a9';
var cloneMedia = $('.music-info').clone();

$('#btnSearch').on('click', function(){

    var valorPesquisa = $('#pesquisa').val();
    $('.musicas-title').text('Resultados de Músicas para "'+ valorPesquisa + '"');

    $('.lista').html(' ');

    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track="+valorPesquisa+"e&api_key="+apiKey+"&format=json"
    }).done(function(msg){
        console.log('msg');
        console.log(msg);


        msg.Search.forEach(function(result){
            var liMedia= cloneMedia.clone();
            $('#img', liMedia).attr("src", trackmatches.image);
            $('.nome-musica', liMedia).text(trackmatches.name);
            $('.nome-artista', liMedia).text(trackmatches.artist);
            $('.lista').append(liMedia);
        })
    })

});