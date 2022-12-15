'use strict'
const fs = require('fs')

const input = fs.readFileSync('./input.txt','utf8', (err, data) => {
 if(err){
  console.error(err)
  return
 }else{
  console.log(data)
 }
})

const line = input.split('\n')



const choices = line.map(pair => pair.split(" "))

const result = choices.reduce((acc,pair) => {
 const [c1, c2] = pair;
 const myChoice = determineMyChoice(c1,c2)


return acc + myChoicePoints(myChoice) + resultPoints(c1, myChoice)
}, 0)

function determineMyChoice(c1,c2){
 //chose paper
 if((c1 === 'A' && c2 === 'Z') || (c1 === 'B' && c2 === 'Y') || (c1 === 'C' && c2 === 'X')){
   return 'paper'
 }
 //chose rock
 if((c1 === 'A' && c2 === 'Y') || (c1 === 'B' && c2 === 'X') || (c1 === 'C' && c2 === 'Z')){
   return 'rock'
 }
 //scissors
 if((c1 === 'A' && c2 === 'X') || (c1 === 'B' && c2 === 'Z') || (c1 === 'C' && c2 === 'Y')){
   return 'scissors'
 }
}

function resultPoints(c1,c2){
 //winners
 if ((c1 === 'A' && c2 === 'paper') || (c1 === 'B' && c2 === 'scissors') || (c1 === 'C' && c2 === 'rock')){
  return 6;
 }
 //ties
 if ((c1 === 'A' && c2 === 'rock') || (c1 === 'B' && c2 === 'paper') || (c1 === 'C' && c2 === 'scissors')){
  return 3;
 }
 //losers
 if ((c1 === 'A' && c2 === 'scissors') || (c1 === 'B' && c2 === 'rock') || (c1 === 'C' && c2 === 'paper')){
  return 0;
 }
 
}

function myChoicePoints(choice){
 if(choice === 'rock')return 1;
 if(choice === 'paper') return 2;
 if(choice === 'scissors') return 3;
}

console.log(result)