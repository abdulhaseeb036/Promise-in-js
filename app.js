
// simple js run syscrounusy means line by line
// var a = "haseeb";
// console.log(a);

// var b = "hassan";
// console.log(b);
//>>> simple line 4 print a and then b; 

//<<< now let loop between them loop print 1000 number b/w a & b
// var a = "haseeb";
// console.log(a);

// for (var i = 0; i <10; i++){
//     console.log(i);
// }

// var b = "hassan";
// console.log(b);
//<<< now let loop between them loop print 1000 number b/w a & b

// >> other example
// var a = "haseeb";
// console.log(a);

//  setTimeout(function(){
//     for (var i = 0; i <10; i++){
//         console.log(i);
//     }
//  },1000)


// var b = "hassan";
// console.log(b);
// <<<< other example




//>>>> Food order to chef example;
// var order1 = "order 1";
// console.log(order1);

// var first = function firstorder(){
//     setTimeout(function(){
//     console.log("waiter go to take a order 1 items")

// },5000);
// }


// var order2 = "order2";
// console.log(order2);
// var second = function secondorder(second){
//     setTimeout(function(){       
//     console.log("waiter go to take a order 2 items")       
// },1000);
// }

// function ordercomplete() {
//     first()
//     second()

// }
// ordercomplete();
// <<<< Food order to chef example;

//>>>>>>>>>>>>>>>>>> Promise
// const datafetch = () => {    
//     return (
//     Math.floor(Math.random() *10) %2 == 0 ? true : false
//         // this is example here kuch bhi data fetch aa rha hoga backend sy. API CALL
//     )}

// const result = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         datafetch() ? resolve() : reject();
//     },1000)
//     // API CALL K DATA RESOLVE YA REJECT THORA TIME LY GA ANY MA TU SETTIME LGAYA.

// })

// const resolvepromise = () => {
//     console.log("success");
// }

// const rejectpromise = () => {
//     console.log("failed to fetch data");
// }

// result.then(resolvepromise).catch(rejectpromise);

// console.log("haseeb");

// <<< THIS IS A BEST EXAMPLE OF PROMISE TO FATCHING DATA;

let url = 'www.fiverr.com';
async function response(){  
    await fetch(url);
}
let commits = await response.json(); // read response body and parse as JSON

alert(commits);