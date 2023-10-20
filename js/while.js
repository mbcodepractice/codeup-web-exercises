"use strict";
let i=2
while(i <= 65536){
  console.log(i);
  i*=2;
}

let allCones = Math.floor(Math.random() * 100 - 50) + 50 + 1;
do{
    let conesSold= Math.floor(Math.random() * 5) + 1;
    if (conesSold < allCones) {
        console.log("You can buy this product");
        allCones = allCones - conesSold;
    }else if(conesSold > allCones){
        console.log("we have nothing for you");
    } else {
        console.log("we ran out of cones")
        break;
    }
}while (allCones > 0);






