class Clock {

  constructor(template = template){
    let timer;
    let output = template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);
  }

   render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

   

    console.log(output);
  }

  stop = function() {
    this.clearInterval(timer);
  };

  start = function() {
    this.render();
    timer = this.setInterval(render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();
// setTimeout(clock.stop, 4000);
