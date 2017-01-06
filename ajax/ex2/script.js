$(function(){
    $("#load-more").click(function(){
        alert("test");
    });
     $.get("page1.json", function(result){
         console.log(result);  
    });
}) 

