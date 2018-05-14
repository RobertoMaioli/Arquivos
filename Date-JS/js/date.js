
window.onload = setInterval(horario, 1000);

function horario() {
  var relogio = document.querySelector("#relogio");
  var d = new Date();
  var seg = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();
  var dia = d.getDate();
  var mes = d.getMonth();
  var yr = d.getFullYear();
  var meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  var diaSem = d.getDay();
  var diasSemana = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

  relogio.innerHTML = dia + "/" + meses[mes] + "/" + yr;
}