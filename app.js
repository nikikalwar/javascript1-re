//console.log("I am running");
//what is an arrow function;
//console.log("shorthand for function expression");//no this, new.target, super, arguments
//currying is the process of the taking a function with multiple arguments and turning it 
//into sequence of functions each with only single argument
/*
const addSum=(a)=>(b)=>(c)=>a+b+c;
let sum=addSum(2)(3)(4);
console.log(sum);

//pure functions are functions whch have no side effects, that's there output remains always the same
//give example with array.push() and array.concat([number]);

//temporal dead zone
//the timespan between the creation of variable's binding and its declaration is called temporal dead zone

//what is IIFE
//Immediately invoked function expression=>a function expression that runs as soon as its declared
(function () {
    var message = "IIFE";
    console.log(message);
  })();

  (function(){
    console.log("Invoked as soon as declared")
  })();

  //how do you decode or encode a url in javascript
  let uri="employeeDetails?name=john&occupation=manager";
  let encodedString=encodeURI(uri);
  let decodedString=decodeURI(uri);
  console.log(encodedString,decodedString);

//what is memoization
//memoization is programming technique which attempts to increase a function's
//performance by caching its previously computed results
//each time a memoized function is called , its parameters are used to index the cache
//if the data is present, then it can be returned, without executing the entire function
//otherwise the function is executed and the result is cached

const memoizAddition=()=>{
    let cache={};
    return (value)=>{
        if(value in cache){
            console.log("fetching from cache");
            return cache[value];
        }
        else {
            console.log("calculating result");
            let result=value+20;
            cache[value]=result;
            return result;
        }
    }
}

const addition=memoizAddition();
console.log(addition(20));
console.log(addition(20));
console.log(addition(20))
*/
//hoisting is a JavaScript mechanism where the variables, function declarations
//and classes are moved to the top of their scope before code execution 
//JavaScript only hoists declarations but not the intialization
//classes are just syntactic sugar over javascript prototype based inheritance

//what is a closure?
//A closure is the combination of function and the lexical environment within which that
//function is declared i.e. its inner function that has access to the outer or 
//enclosing function's variables

//what is web storage
//web storage is simply an API that allows to store data in web browser in key value pairs
//local storage 
//session storage
/*
function goBack() {
    window.history.back();
  }
  function goForward() {
    window.history.forward();
  }
 

  //what are javascript accessors
  //the set and get method

  var user={
    firstName:"Niki",
    lastName:"sah",
    get fname(){
      return this.firstName;
    },
    set fname(fname){
      return this.firstName=fname
    }
  }

  console.log(user.fname); // getter access lang as en
user.fname = 'fr';
console.log(user.fname);

try {
  greeting("Welcome");
} catch (err) {
  console.log("error object is an inbuilt object which has two properties name and message")
  console.log(err.name + "<br>" + err.message);
}

var marks = [50, 20, 70, 60, 45, 30];
console.log(Math.min.apply(null,marks)); //gives the min 
console.log(Math.max.apply(null,marks)); //gives the max;


//what is comma operator
var x=1;
x=(x--,1,0);
console.log(x);

//what is a collation
//collation is used for sorting a set of strings
 */
//how to know if you are in strict mode
'use strict'
function checkStrictMode(){
  console.log(this)
}
checkStrictMode();