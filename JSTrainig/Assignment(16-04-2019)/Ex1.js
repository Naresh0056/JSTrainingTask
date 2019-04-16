// Example 1

// function fun() {
//   return (this.a = 2);
// }
// console.log(fun());
// let a = 4;

// Example 2

// var a = 12;
// var test = {
//   a: 3,
//   b: {
//     a: 4,
//     x: function() {
//       console.log(a);
//     }
//   }
// };
// var func = test.b.x;
// func();
// test.b.x();

// Example 3

// var a = 5;
// var test = {
//   a: 2,
//   b: {
//     a: 3,
//     c: function() {
//       console.log(this.a);
//     }
//   }
// };
// test.b.c();
// var s = test.b;
// s.c();

//Exapmle 4

// "use strict";
// function fun(fn) {
//   fn();
// }
// var obj = {
//   age: 22,
//   getAge: function() {
//     console.log(this.age);
//   }
// };
// var age = 21;
// fun(obj.getAge);

// Example 5

// function foo(fn) {
//   fn.call(obj);
//     fn();
// }
// var obj = {
//   a: 2,
//   foo: function() {
//     console.log(this.a);
//   }
// };
// var a = 1;
// foo(obj.foo);

// Example 6

// function foo() {
//   var a = 3;
//   var fun = function() {
//     console.log("ghfd");
//   };
// }

// var result = new foo();
// result.fun();
// console.log(result.fun);

// function User(name) {
//   this.name = name;
//   this.ss = function() {
//     console.log("hello");
//   };
// }

// let user = new User("John");
// console.log(user.name);
// user.ss();
