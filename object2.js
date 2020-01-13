let obj1 = {
name: 'Denis',
name2: 'Denis2',
name3: 'Denis3',
name4: 'Denis4',
};

let obj2 = {
  namew: 'Denis234',
  };

let newObject = Object.assign({}, obj1, obj2);

console.log("TCL: obj1", obj1)
console.log("TCL: newObject", newObject)
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
console.log(Object.entries(obj1))
