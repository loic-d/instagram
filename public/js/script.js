$(document).ready(function(){

   var search = window.location.hash.substr(1);
    console.log(search);

   $('.search-input').val(search);

   $('.search-form').on('submit', function(e){
       e.preventDefault();
       var search = $('.search-input').val();
       window.location.replace(" http://localhost:8888/"+search);
   })
});