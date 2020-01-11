// const greet = (greeting, name) => console.log(`${greeting} ${name}`);


const greet = (greeting = 'Hello', name = 'friend') => console.log(`${greeting} ${name}`);


greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

const sum = (...numbers) => numbers.reduce((acc, number) => acc + parseInt(number), 10);


console.log("TCL: sum(1,2,5)", sum(1,2,5))


