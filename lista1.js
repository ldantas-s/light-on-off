function mudar() {
  alert('New text changed');
  document.getElementById('result').innerHTML = '';
  for (let i = 0; i < 10; i++ ) {
    document.getElementById('result').innerHTML += (i + 1) + ' - Mudou!<br>';
  }
}


function on(id) {
  document.getElementById(id).src = './Lon.png';
  sendToAPI(1);
}

function off(id) {
  document.getElementById(id).src = './Loff.png';
  sendToAPI(0);
}


function sendToAPI(state) {

  var http = new XMLHttpRequest();

  http.open('GET', 'https://api.thingspeak.com/update?api_key=XXZP77R1S4HD5PUV&field1='+state)

  http.send();

  http.onload = console.log(http.responseText+' '+state);

}
