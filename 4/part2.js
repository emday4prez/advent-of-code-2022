const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8', (err, data) => {
 if (err){
  console.error(err.message)
 }else{
  console.log(data)
 }
})

const arrayOfLines = input.split('\n')

const result = arrayOfLines.reduce((acc, curVal) => {
 const [section1, section2] = curVal.split(',');
 const [section1Start, section1End] = section1.split('-');
 const [section2Start, section2End] = section2.split('-');
 
 console.log('section1: ', section1)
 console.log('section2: ', section2)
 if((+section1End < +section2Start) || +section2End < +section1Start){
 
 }else if((+section1Start === +section2End) || (+section2Start === +section1End)){

 acc++
}else if((+section1Start <+section2End) && (+section1End >= +section2End)){
 
 acc++
}else if((+section2Start < +section1End) && (+section2End >= +section1End)){

 acc++
}else if((+section2Start < +section1Start) && (+section2End > +section1Start)){

 acc++
}else if((+section2Start > +section1Start) && (+section1End > +section2Start)){

 acc++
}

return acc;
}, 0)
console.log(result)