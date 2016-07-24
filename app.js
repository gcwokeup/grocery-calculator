var resetValues = function(){
  $(".form").trigger("reset");
}

var itemCost = function(addItemForm){
  var cost = addItemForm[1].value * addItemForm[2].value;
  return cost;
}

var totalPrice = function(value){
  var list = $(".listItem")[2].serializeArray();
  console.log(list);
}

var addToList = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var addItemForm = $(".form").serializeArray();
    $(".groceryList").append("<tr class='listItem'><td>" + addItemForm[0].value + "</td><td>" + addItemForm[1].value +  "</td><td>" + addItemForm[2].value + "</td><td>" + itemCost(addItemForm) + "</td></tr>");
    resetValues();
    totalPrice();
  });

};

$(document).ready(addToList);

