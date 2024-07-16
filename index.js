// x=window.prompt('enter first number')
// y=window.prompt('enter second number')
// if(x>y)
//     {
//         document.write(x)
//     }
// else{
//     document.write(y)
// }

// var a=[10,11,12,13,14,15]
// a.splice(2,1,20,21,22,23,24)
// document.write(a)

// var a=[10,11,12,13,14,15]
// b= a.slice(2,4)
// document.write(b)

// x=window.prompt('enter your number')
// program to check if a number is prime or not


// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }
// var x =new Date();
// console.log(x.getFullYear());
// console.log(x.getDate());
// console.log(x.getMonth());
// console.log(x.getTime());
// console.log(x.getMinutes());

// document.write(x.getDate()+"-"+(x.getMonth()+1)+"-"+x.getFullYear())

// var x =new Date();
// document.write(Math.ceil(Math.random()*(100-50))+50)

// function karna(a,b,c)
// {
//     document.write(a+b);
// }
// karna(2,4)

// var x = {
//     name : "preethi",
//     getname : function()
//               {
//                 document.write(this.name)
//               }
// }
// x.getname()

// try{
//   {
//     // var x=10
//     var x=window.prompt(hey)
//     if(x===hey){
//       throw{name:'hey', message:'i know'}
//     }
//   }
//   document.write(x)

// }
// catch(err){
//   document.write(err)

// }
// finally{
//   document.write("irrespective of exceptions")
// }

// import san from "./js_1.js"
// var x = {
//   roll:20
// }
// x.val = san;
// export default x;


  // a=parseInt(window.prompt());
  // b=parseInt(window.prompt());
  // c=parseInt(window.prompt());
  // s=(a+b+c)/2
  // Z=Math.sqrt(s*((s-a)*(s-b)*(s-c)))
  // console.log(Math.ceil(Z))

// function quadratic(a,b,c){
//   let h=Math.abs(((b**2)-(4*a*c))*(-1));
//   console.log(Math.ceil(h));
//   let z=parseInt((-b+h)/(2*a));
//   let e=parseInt((-b-h)/(2*a));
//   console.log(z,e)
  
// }
// let a=parseInt(window.prompt());
// let b=parseInt(window.prompt());
// let c=parseInt(window.prompt());
// quadratic(a,b,c);


// Arrow 
// const fun=()=>console.log('it is working');

// const number=[1,2,3,4,5]
// number.forEach((val,index)=>console.log(val,index));
// number.forEach((val,index)=>console.log(arr));

// number.forEach((val,index,arr)=>{
  // arr[index]+=2
// });
// console.log(number);



