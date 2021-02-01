
mostrarFavoritos();

function mostrarFavoritos(){
    var cloneFavoritos = $('.trackFavoritos').clone();

    for ( var i = 0, len = localStorage.length; i < len; ++i ) {

        var track = localStorage.key( i ); //Nome Da Musica
        var artist = localStorage.getItem( localStorage.key( i ) );

            $.ajax({
                method: "GET",
                url: "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c298e8e7f8045bda196a9b69d88b2304&format=json",
                data: {
                    artist: artist,
                    track: track
                }
            })
            .done(function (msg) {
                // Atributos da musica
                var musicName = msg.track.name;
                var artistName = msg.track.artist.name;
                var listenersCount = msg.track.listeners;

                var liMedia = cloneFavoritos.clone();
                var detailButton = document.createElement("a");

                $(detailButton).text("Abrir");
                $(detailButton).attr('href',"details.html?name=" + musicName + "&artist=" + artistName);

                $('.detahes', liMedia).append(detailButton);
                $('.detail_listeners',liMedia).text(listenersCount);
                $('.detail_nome',liMedia).text(musicName);
                $('.detail_artista',liMedia).text(artistName);
                
                var favouriteButton = document.createElement("button");  

                favouriteButton.value = musicName + "___" + artistName;

                favouriteButton.classList.add("btn-danger");
                var icon = document.createElement("i"); 
                icon.classList.add("fas");
                icon.classList.add("fa-heart");
                favouriteButton.appendChild(icon); 

                // Ao clicar o botão de favorito  
                $(favouriteButton).on('click', favouriteButton, function(){
                    // Remover musica da local storage
                    var songName = this.value.split("___")[0];
                    localStorage.removeItem(songName);
                    this.className = '';
                    // Redirecionar novamente para favoritos (forçar o refresh)
                    window.location.href = "favoritos.html";
                });

                $('.favoritos', liMedia).append(favouriteButton);

                $('.favoritos-list').append(liMedia);
            })
    
        
    }
    //var track = parametrosURL.get('name');
    //var artist = parametrosURL.get('artist');

    
}
