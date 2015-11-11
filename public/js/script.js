$(document).ready(function(){

   var pathname = window.location.pathname.substring(1);
   $('.search-input').val(pathname);

   $('.search-form').on('submit', function(e){
       e.preventDefault();
       var search = $('.search-input').val();
       window.location.pathname = "/"+search;
   })
});

function isEmpty(object) {
    for(var key in object) {
        if(object.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}