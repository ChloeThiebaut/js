$(function(){

    var id_film = window.location.hash.substr(1);
    console.log(id_film);
    
     $.get("https://api.themoviedb.org/3/movie/ID_FILM?api_key=58f8fe741b03b0ae4c9a2ed080e94041", function(resultat){
      console.log(resultat);
  }); 
   
    
    
});
