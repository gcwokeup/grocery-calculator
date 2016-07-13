var main = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var form = $(".form").serializeArray();
    var name = $('form[name="produce-name]"').val();
    console.log(form);
    
  })

}

$(document).ready(main);

