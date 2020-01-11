let firstName = 'Bill',
  lastName = 'Gates',
  email = 'billgates@microsoft.com';

let person = {
  firstName,
  lastName,
  email,
  sayHello() {
    console.log(`Hi, my name is ${this.firstName} ${this.lastName}`)
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },

  set fullName(value) {
    return this.firstName = value;
  }
};



person.sayHello();

const createCar = (property, value) => {
  return {
    [property]: value,
    ['_' + property]: value,
    [property.toUpperCase()]: value,
    ['get' + property]() {
      return this[property];
    },
  };
}

console.log(createCar('vin', 1));
console.log(createCar('www', 33).getwww());