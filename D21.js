
/*

Q1


const prompt = require("prompt-sync")()

let arr = [1,5,9,76,3,1,5,616]
let number = prompt("Enter number")

console.log(number)
c= Number.parseInt(number)

arr.push(c)

console.log(arr)

*/

/*

Q2


const prompt = require("prompt-sync")()

let arr = [4,5,6,9,7,2,3,1,8,6]
let a;
do{
     a = prompt("Enter number")
     a= Number.parseInt(a)

     arr.push(a)

     



}while (a!= 0)
arr.pop()
console.log(arr)
*/
/*
// Q3

let arr = [1,5,9,7,4,6,3,8,4,6]

let n = arr.filter((x)=>{


    return x%2==0
})

console.log(n)

*/
let arr = [1,5,9,7,4,6,3,8,4,6]

let n = arr.map((x)=>{


    return x*2
})

console.log(n)

// 2, 10, 18, 14,  8, 12,  6, 16,  8, 12

