$(function(){
    $.get("toload.html", function(result){
        
        $("#wrapper").html(result); 
//        ecrase le contenu
        $("#wrapper").append(result); 
//        ajoute le contenu
//        alert(result);
    });
    
    $.get("data.json", function(result){
        console.log(result); 
    });
    
});