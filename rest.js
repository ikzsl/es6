const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
  { brand: 'bmw', model: 'mini', year: 2011 },
];

class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) { return new Enumerable(this.collection.slice(), this.operations.concat(fn)); }

  // BEGIN (write your solution here)
  where(...args) {
    if (args.every((el) => !el)) {
      return this.build(a => a);
    }
    let opers = [];
    args.forEach((item) => {
      if (typeof item === 'function') {
        opers.push((coll) => coll.filter(item));
      } else {

        for (let key in item) {
          console.log(item[key]);
          opers.push((coll) => coll.filter((car) => car[key] === item[key]));
        }

        console.log(item)
      }

    });
    return this.build(opers);


  }
  // END

  getProcessedCollection() {
    if (!this.memo) { this.memo = this.operations.reduce((acc, func) => func(acc), this.collection); }
    return this.memo;
  }
  get length() { return this.getProcessedCollection().length; }
  toArray() { return this.getProcessedCollection().slice(); }
}

let coll = new Enumerable(cars);

const result1 = coll.where({ brand: 'kia' }, (car) => car.year > 2011).toArray();
console.log("TCL: result1", result1)


