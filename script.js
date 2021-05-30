$(document).ready(function(){
  $('.swim').each(function(){
    var dataImage = $(this).data("img");
    var dataClass = $(this).attr("class");
    $(this).after('<img src="' + dataImage + '" class= "' + dataClass + '"/>');
  });
});
