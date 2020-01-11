var buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.innerText = i;
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log(i);
  });
}




