var Person = function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
};

var person1 = new Person("John", "Doe", 50, "blue");
//--------------------------------------------------------

// Achieve same using create object.
var girl = {
  name: "",
  traits: {}
};

// Create a girl instance.
var sarah = Object.create(girl);
// Set sarah's properties.
sarah.name = "Sarah";
sarah.traits.age = 30;
sarah.traits.weight = 125;

//--------------------------------------------------------

var person = Object.create(null);

console.log(typeof (person)); // Object
console.log(person); // Object with prototype object as null

// Set property to person object
person.name = "Virat";

console.log(person); // Object with name as property and prototype as null
//--------------------------------------------------------

// Basic Object.
var myFather2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//--------------------------------------------------------
// Closure;
var f = function () {
  var count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}();

console.log(f());
console.log(f());
console.log(f());

//--------------------------------------------------------
// Hoisting
function foo() {
  bar();
  var t = function bar() {
    console.log(`Hello`);
  };
}
//console.log(foo());

//------------------------this--------------------------------

var obj = {
  port: 8081,
  url: function () {
    return `http://localhost:${this.port}`;
  }
};

console.log(obj.url());
