function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function resumo() {
  document.getElementById('lista_container_resumo').style.display = 'flex';
  document.getElementById('lista__itens-resumo').style.display = 'block'
}

function habilidades() {
    document.getElementById('lista_container_habilidades').style.display = 'flex';
  document.getElementById('lista__itens-habilidades').style.display = 'block';
}

function experiencias() {
    document.getElementById('lista_container_experiencias').style.display = 'flex';
  document.getElementById('lista__itens-experiencias').style.display = 'block';
}

function formacao() {
    document.getElementById('lista_container_formacao').style.display = 'flex';
  document.getElementById('lista__itens-formacao').style.display = 'block';
}

function cursos() {
    document.getElementById('lista_container_cursos').style.display = 'flex';
  document.getElementById('lista__itens-cursos').style.display = 'block';
}

function certificados() {
    document.getElementById('lista_container_certificados').style.display = 'flex';
  document.getElementById('lista__itens-certificados').style.display = 'block';
}