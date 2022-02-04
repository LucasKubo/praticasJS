let statusLampada = 'apagada';
let lampada = document.getElementById('light');
lampada.addEventListener('mouseenter', () => {
  if (statusLampada == 'apagada') {
    console.log(statusLampada);
    lampada.src = '../img/acesa.jpg';
    //lampada.setAttribute('src', '../img/acesa.jpg');
    statusLampada = 'acesa';
  } else if (statusLampada == 'acesa') {
    lampada.setAttribute('src', '../img/apagada.jpg');
    statusLampada = 'apagada';
  }
});
lampada.addEventListener('click', () => {
  lampada.src = '../img/quebrada.jpg';
});
