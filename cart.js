///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((a, c) => a + c.price, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
  let priceAfterTax = cartTotal * tax + cartTotal - couponValue;
  return priceAfterTax;
}
console.log(calcFinalPrice(100, 5, 0.1));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    This customer object needs to have the following information:
    id, first name, last name, email, phone number, city/locaiton, 
    we need an id, wihich will be a number, and just incase we have duplicate costumers with the same name, it will be a unique identifier
    we need names which will be a string ,it is  to reference them and if we want to send out an email to them we can use their name
    we need email for promotions, this will be  a string
    and phone number for delivery or other services, this will be a number
    location so we can target them with ads by locations, string

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
  constructor(id, firstName, lastName, email, phone, location) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.location = location;
  }
}

const firstCostumer = new Customer(
  1,
  "chiemeka",
  "anunkor",
  "chiemeka@gmail.com",
  1232312323,
  "austin,tx"
);
console.log(firstCostumer);
