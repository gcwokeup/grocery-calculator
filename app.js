var main = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var form = $(".form").serializeArray();
    console.log(form);
  })

}

var addToList = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var addItemForm = $(".form").serializeArray();
    $(".total").append("<tr class='listItem'><td>" + addItemForm[0].value + "</td><td>" + addItemForm[1].value +  "</td><td>" + addItemForm[2].value + "</td></tr>");
  })
};

$(document).ready(addToList);

