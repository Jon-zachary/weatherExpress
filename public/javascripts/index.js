console.log('index.js firing');

$(function(){
 $('#location').on('keyup', function(e){
   if(e.keyCode === 13) {
    console.log('enter key pressed');
     var parameters = { location: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
     });
    }
 });
});
