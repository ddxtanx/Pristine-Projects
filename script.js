$(document).ready(function(){
    $("div").hover(function() {
      $(this).animate({
          zoom:1.07
      });
    },
    function() {
      $(this).stop().animate({
          zoom:1 
      });
    });
});