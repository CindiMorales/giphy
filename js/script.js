// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
 var search = $("input").val();
  $.ajax({
      url:"https://api.giphy.com/v1/gifs/search?q=" + search + "&rating=pg&api_key=cVRNyx7QJZX0F6nTWQ0XbssO1yb4KtSM",
      method:"GET",
      success:function(response){
          
          $(".container1").empty();
          
         for(var i=0; i<25; i=i+1){
          var pickurl = response.data[i].images.original.url;
          $('.container1').append('<img src='+ pickurl+'>');
         }
      
     
      }
      
      
      
      
  })
  
  
});

