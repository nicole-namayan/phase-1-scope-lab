 var customerName = "bob"; 
 
 function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  window.bestCustomer ;
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

function changeLeastFavoriteCustomer(newCustomer) {
  const leastFavoriteCustomer = "bob";
  leastFavoriteCustomer = newCustomer; 
  console.log(`New least favorite customer is: ${leastFavoriteCustomer}`);
}

changeLeastFavoriteCustomer("bob"); 





 

