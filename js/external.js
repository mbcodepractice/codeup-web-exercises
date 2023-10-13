"use strict";

console.log("hello from external javascript");

alert("welcome to my website!");

let userFavoriteColor=prompt("what ia your favorite color?");
console.log('userFavoriteColor');

alert('Cool, ' + userFavoriteColor + ' is my favorite color too!');

let mMdays = 3;
let bBdays = 5;
let hercDays = 1;

let movieRate = 3;
mMdays = prompt("how many days for mermaid?");
bBdays = prompt("how many days for brother bear?");
hercDays = prompt("how many days for hercules?");

movieRate = prompt("what is the movie rate?");
let total = mMdays * movieRate + bBdays * movieRate + hercDays * movieRate;
alert("total of " + total);

let googleWorked = prompt("how many hours did you work for google?","6");
let amazomWorked = prompt("how many hours did you work for amazon?","4");
let metaWorked = prompt("how many hours did you work for meta?","10");


let metaPay= prompt("what is the hourly pay for meta?","350");
let googlePay = prompt("what is the hourly pay for google?","400");
let amazonPay = prompt("what is the hourly pay for amazon?","380");

let totalPaycheck = metaWorked * metaPay + googleWorked * googlePay + amazomWorked * amazonPay;
alert("total of " + totalPaycheck);



