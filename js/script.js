window.addEventListener('load', () => {
  blueR = document.getElementById('blueR');
  redR = document.getElementById('redR');
  greenR = document.getElementById('greenR');

  blueR.addEventListener('change', () => {
    document.querySelector('#blueD').value = blueR.value;
    console.log('Azul: ' + blueR.value);
    color(redR.value, greenR.value, blueR.value);
  });

  redR.addEventListener('change', () => {
    document.querySelector('#redD').value = redR.value;
    console.log('vermelho: ' + redR.value);
    color(redR.value, greenR.value, blueR.value);
  });

  greenR.addEventListener('change', () => {
    document.querySelector('#greenD').value = greenR.value;
    console.log('Verde ' + redR.value);
    color(redR.value, greenR.value, blueR.value);
  });
});

function color(red, green, blue) {
  document.getElementById('quadrado').style.backgroundColor =
    'rgb(' + red + ',' + green + ',' + blue + ')';
}
