let user = class User {
  constructor(name){
    this.name = name;
  }

  sayHi() {
    console.log(`Hi ${this.name}`)
  }
}

new user('Ant3n').sayHi();
// user.sayHi();
