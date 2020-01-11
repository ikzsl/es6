//массивы
// let [js, php, rb, py] = ['JavaScript', 'PHP', 'Ruby', 'Python'];
// console.log(js, php, rb, py);

//объекекты

// let user = {
//   firstname: 'John',
//   lastname: 'Doe',
//   social: {
//     facebook: 'fasskjhkfjdhk',
//     twitter: 'twtwteuye'
//   }
// };

// let { firstname: first, lastname: last, social: { facebook: fb }, social: { twitter }, age = 25 } = user;
// console.log(first, last, fb, twitter, age);

// function post(url, { data: { firstname, lastname }, cash }) {
//   console.log(firstname, lastname, cash);
// }

// let result = post('api/users', { data: user, cash: false });

function getUserInfo() {
  return {
    firstname: 'John',
    lastname: 'Doe',
    social: {
      facebook: 'fasskjhkfjdhk',
      twitter: 'twtwteuye'
    }
  }
}

let {firstname, lastname, social: {facebook}} = getUserInfo();

console.log(firstname, lastname, facebook)