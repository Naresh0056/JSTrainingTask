// function toUpper() {
//   return this.name.toUpperCase();
// }
// function print() {
//   console.log(toUpper.call(this));
// }
// var obj = {
//   name: "abc"
// };
// var obj2 = {
//   name: "asd"
// };

// console.log(toUpper.call(obj));
// console.log(toUpper.call(obj2));
// print.call(obj2);

//Hoisting Exapmle

// var x = 12;
// (function() {
//   var x = 13;

//   console.log(x);
// })();

// fun();
// var fun = function() {
//   console.log(11);
// };

// var car = {
//   regNumber: "12345",
//   brand: "creta",
//   showDetails: function() {
//     console.log(this.regNumber + " " + this.brand);
//   }
// };
// car.showDetails();
// var carDetails = car.showDetails.bind(car);
// carDetails();

//Another Example

// var func = function() {
//   console.log(this);
//   console.log(this);
// }.bind(1, 3);
// func();

// var func = function() {
//   console.log(this);
// }.bind(1);

// var obj = {
//   func1: func
// };
// obj.func1();
// ("use strict");
// function checkFun() {
//   console.log(this);
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
// }.bind(1)
// // checkFun(2, 4, 3);
// // checkFun.bind(1);
// checkFun();
// checkFun.apply(1, [2, 3, 4]);


var person = {
  name: "jack",
  prop: {
    name: "abcd",
    getName: function() {
      return this.name;
    }
  }
};

var name = person.prop.getName.bind(person);
console.log(name());
console.log(person.prop.getName());
var name = person.prop.getName();
console.log(name);

