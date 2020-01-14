let sum = (obj) => {
  for (let key in obj) {
    if ((typeof obj[key]) === 'number') {
          obj[key] *= 2;
    }
  };
  
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(salaries);
console.log(sum(salaries));
console.log(salaries);  // false