// const data = ['html', [
//   ['body', [
//     ['h2', { class: 'header' }, 'first header'],
//     ['div', [
//       ['p', 'hello, world'],
//       ['p', 'good bye, world'],
//       ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
//     ]],
//   ]],
// ]];


// const buildHtml = (data) => {
//   let result = '';
//   data.forEach((item) => {
//     if (typeof item === 'string') {
//       result += `<${item}>`;
//     }

//   });
//   return result;
// }

// const actual = buildHtml(data);
// console.log(actual, data);


const string = 'GkjskkjJGJh, khkjTYTbvnb64';

const invertCase = (str) => {
  let word, result = '';
  Array.from(str).forEach(el => {
    word = el.toString().toLowerCase();
    if (word !== el) {
      result += word;
    } else { result += word.toUpperCase() };
  });
  console.log(str);
  console.log(result);

}

invertCase(string);