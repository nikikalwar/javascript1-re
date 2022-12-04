console.log("I am running");
//what is an arrow function;
console.log("shorthand for function expression");//no this, new.target, super, arguments
//currying is the process of the taking a function with multiple arguments and turning it 
//into sequence of functions each with only single argument

const addSum=(a)=>(b)=>(c)=>a+b+c;
let sum=addSum(2)(3)(4);
console.log(sum);

