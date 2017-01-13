$(function(){

  $.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=58f8fe741b03b0ae4c9a2ed080e94041", function(resultat){
      console.log(resultat);
  });
    
});