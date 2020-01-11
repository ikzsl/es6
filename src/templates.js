const greet = (name) => console.log(`Hi ${name}`.toUpperCase());
greet('Bill')

const createEmail = (to, from, subject, message) => console.log(`
To: ${to}
From: ${from}
Subject: ${subject}
Message: ${message}
`);

createEmail('john@kjkh.ru', 'sadaew@jhg.ty', 'tema konkretnaya',
  'coobshenie hjghjhg j gj hgj h')

const add = (a, b) => console.log(`${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
add('2', '3');

let name = 'Bill';


const upperName = (literals, value) => {
  console.log(literals, value);
  return literals[0] + value.toUpperCase();
};

console.log(upperName`Hello ${name}`);

