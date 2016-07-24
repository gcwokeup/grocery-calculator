var resetValues = function(){
  $(".form").trigger("reset");
}


Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

var itemCost = function(weight, price){
  var cost = weight * price;
  return cost;
}

var currentTotal = function(){
  var total = parseFloat($('#totalPrice').text().replace("$",""));
  return total == 0 ? 1.00 : total;
}

var totalPrice = function(newValue){
  var newTotal = currentTotal() * newValue;
  return "$" + newTotal;
}

var changeValue = function(selector,newValue){
  $(selector).text(newValue)
}

var addToList = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var productName = $('.form input[name="produce-name"]').val();
    var productPrice = parseFloat($('.form input[name="produce-price"]').val());
    var productWeight = parseFloat($('.form input[name="produce-weight"]').val());
    var productCost  = itemCost(productWeight, productPrice);
    if(!productPrice || !productWeight){
      alert("yo homie, I need numbers for price and weight")
      return;
    }
    $(".groceryList").append("<tr class='listItem'><td>" + 
      productName + "</td><td>" + 
      productPrice +  "</td><td>" + 
      productWeight + "</td><td>" + 
      productCost + "</td></tr>");
    resetValues();
    changeValue("#totalPrice", totalPrice(productCost))

  });

};

$(document).ready(addToList);

