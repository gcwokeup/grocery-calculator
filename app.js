var resetValues = function(){
  $(".form").trigger("reset");
}

var itemCost = function(addItemForm){
  var cost = addItemForm[1].value * addItemForm[2].value;
  return cost;
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

var totalPrice = function(newValue){
  var oldTotal = $(".totalPrice").text();
  var oldVal = parseFloat(oldTotal).toFixed(2);
  var newVal = parseFloat(newValue).toFixed(2);
  var total = (parseFloat(newValue) + parseFloat(oldTotal));
  return "$" + total.formatMoney(2);
}
// var totalPrice = function(newValue){
//   costsArray.push(newValue)
//   function getSum(total, num) {
//     return total + num;
//   return costsArray.reduce(getsum);
//   }
// }
var changeValue = function(selector,newValue){
  $(selector).text(newValue)
}

var addToList = function(){
  $("#submit").click(function(e){
    e.preventDefault();
    var addItemForm = $(".form").serializeArray();
    $(".groceryList").append("<tr class='listItem'><td>" + addItemForm[0].value + "</td><td>" + addItemForm[1].value +  "</td><td>" + addItemForm[2].value + "</td><td>" + itemCost(addItemForm) + "</td></tr>");
    resetValues();
    console.log(totalPrice(itemCost(addItemForm)));
    changeValue(".totalPrice", totalPrice(itemCost(addItemForm)))

  });

};

$(document).ready(addToList);

