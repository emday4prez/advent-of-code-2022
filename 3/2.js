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
const arrayOfInputs = input.split('\n').reverse()


const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letterValues = new Map()

for(let i = 0; i < letters.length; i++){
 letterValues.set(letters[i], i+1)
}
let result = 0;
while(arrayOfInputs.length > 0){
 const bag1 = new Set(arrayOfInputs.pop())
 const bag2 = new Set(arrayOfInputs.pop())
 const bag3 = new Set(arrayOfInputs.pop())
 const duplicatesSet = new Set()
 
 bag1.forEach(char => {
  if(bag2.has(char)){
   duplicatesSet.add(char)
  }
 })
 bag2.forEach(char => {
  if(bag1.has(char)){
   duplicatesSet.add(char)
  }
 })
bag3.forEach(char => {
 if(duplicatesSet.has(char)){
  result += letterValues.get(char)
 }
})
 
}

console.log(result)