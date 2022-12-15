const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


const elves = input.split('\n\n')


const calories = elves.map(elf => {
  const calories = elf.split('\n').map(Number)
  return calories.reduce((prev, current) => prev+current, 0)
})



const orderedCalories = calories.sort((a,b) => b-a)



const top3total = orderedCalories[0] + orderedCalories[1] + orderedCalories[2];

console.log(top3total)