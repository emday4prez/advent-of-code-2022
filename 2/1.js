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

function myChoicePoints(choice){
 if(choice === 'X') return 1;
 if(choice === 'Y') return 2;
 if(choice === 'Z') return 3;
}

function resultPoints(c1,c2){
//ties
 if((c1 === 'A' && c2 === 'X') || (c1 === 'B' && c2 === 'Y') || (c1 === 'C' && c2 === 'Z')){
  return 3;
 }
 //wins for player2
 if((c1 === 'A' && c2 === 'Y') || (c1 === 'B' && c2 === 'Z') || (c1 === 'C' && c2 === 'X')){
  return 6;
 }
 //loss for player2
 if((c1 === 'A' && c2 === 'Z') || (c1 === 'B' && c2 === 'X') || (c1 === 'C' && c2 === 'Y')){
  return 0;
 }
 
}

const sum = choices.reduce((a,b) => {
 const [c1,c2] = b
 return myChoicePoints(c2) + resultPoints(c1,c2) + a
}, 0)

console.log(sum)