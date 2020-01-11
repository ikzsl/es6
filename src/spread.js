let staticLanguages = ['C', 'C++', 'Java'];
let dinamicLanguages = ['PHP', 'JavaScript', 'Ruby'];

let languages = [...staticLanguages, 'C#', ...dinamicLanguages, 'Python'];
console.log("TCL: languages", languages);

const sum = (...numbers) => numbers.reduce((accum, item) => accum + item, 0);

// let numbers = [12, 21, 3];


// sum(1);
console.log("", sum(1, 2, 4, 3, 5, 2, 44, 3))