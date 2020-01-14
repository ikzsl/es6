class Task {
  constructor(title = Task.gedDefaulTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('sozdanie zadachi')
  }

  complete() {
    this._done = true;
    console.log('done')
  }

  static gedDefaulTitle() {
    return 'zadacha'
  }

  get done() {
    return this._done === true ? 'Выполнена' : 'Не выполнена'
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.error('неверные данные')
    }
  }
}

Task.count = 0;

let task = new Task();
let task2 = new Task();
task.complete();

console.log(Task.count)


