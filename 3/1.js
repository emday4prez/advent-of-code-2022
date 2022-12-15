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
const arrayOfInputs = input.split('\n')


const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const letterValues = new Map()

for(let i = 0; i < letters.length; i++){
 letterValues.set(letters[i], i+1)
}



const result = arrayOfInputs.reduce((acc, input) => {
 let duplicateLetter;
 const mid = Math.floor(input.length/2)
 const bag1 = input.slice(0,mid)
 console.log('bag1',bag1)
 const bag2 = input.slice(mid, input.length)
  console.log('bag2',bag2)
 const setOfLetters = new Set()

for(const char in bag1){
 setOfLetters.add(bag1[char])
}
console.log('set of letters', setOfLetters)
for(const char in bag2){
 if(setOfLetters.has(bag2[char])){
  duplicateLetter = bag2[char]
 }
}
console.log('duplicate: ',duplicateLetter)
 return acc + letterValues.get(duplicateLetter)
},0)

console.log(result)