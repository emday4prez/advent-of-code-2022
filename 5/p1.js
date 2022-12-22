'use strict'
const fs = require('fs')

let input = fs.readFileSync('sample.txt', 'utf-8', (err, data) => {
 if(err){
  console.error(err)
  return;
 }else{
  console.log(data)
 }
})


const [rawStacks, rawInstructions] = input.split('\n\n')

const parsedStacks = rawStacks.split('\n').map(line => [...line].filter((value, index) => index % 4 === 1))

const indexes = parsedStacks.pop()

console.log(indexes)