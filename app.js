//console.log("I am running");
//what is an arrow function;
//console.log("shorthand for function expression");//no this, new.target, super, arguments
//currying is the process of the taking a function with multiple arguments and turning it 
//into sequence of functions each with only single argument
/*
const addSum=(a)=>(b)=>(c)=>a+b+c;
let sum=addSum(2)(3)(4);
console.log(sum);
*/
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
