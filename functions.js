function takeOrder(crustType, topping){
  orderCount ++;
  console.log('Order :' + crustType + 'pizza topped with' +' ' + topping );
}

function getSubTotal(itemCount)
{
  return itemCount * 7.5;
}
var orderCount = 0;
var total_cost = 0;

takeOrder("thin crust ", "onion");
takeOrder('pan ', 'tomato');
takeOrder('thin pan ', 'pepper');
console.log('Total no of pizza : ' + orderCount);

console.log(getSubTotal(orderCount));


