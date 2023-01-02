
let max=10
let min= 0
let  x = Math.random()*(max - min) + min;
y=Math.floor(x)
console.log(y)
let chances = 0
let number

const prompt = require("prompt-sync")()
do {

     number = prompt("Enter number")
    chances ++

}while (number!=y)

console.log("You guessed correct number at " +chances+ " time")

