'use strict'
    // define api keys
var apiKey = '1da21aadb2d8a4a01756f791d66a9dc6';
var apiSecret = 'a9af45ac5f7059fc01ffadf7bb3ec8a9';
//cloneMedia = $('.music-info').clone();
var cloneMedia = $('.media').clone();

$('#btnSearch').on('click', function(){


    var valorPesquisa = $('#pesquisa').val();
    $('.panel-title').text('Resultados de Músicas para "'+ valorPesquisa + '"');

    $('.lista').html(' ');

    $.ajax({
        method:"GET",
        url:"http://ws.audioscrobbler.com/2.0/?method=track.search&track="+valorPesquisa+"e&api_key="+apiKey+"&format=json"
    }).done(function(msg){
        console.log(msg);


       msg.results.trackmatches.track.forEach(function(result){
            var liMusica  = cloneMedia.clone();
            //$('#img', liMusica).attr("src", trackmatches.image);
            $('.title',liMusica).text("Slipknotsa"+result.name);
            $('.ano', liMusica).text("Slipknotsa"+result.name);
            $('.media-list').append(liMusica);
           console.log(result.name);
        })
    })

});