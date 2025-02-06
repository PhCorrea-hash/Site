function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function resumo() {
  document.getElementById('lista_container_resumo').style.display = 'flex';
  document.getElementById('lista__itens').style.display = 'block'
}

