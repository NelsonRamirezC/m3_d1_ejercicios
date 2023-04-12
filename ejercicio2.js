let fecha = new Date();

function getHour() {
  let hora = fecha.getHours();
  let minutos = fecha.getMinutes();
  return `${hora}:${minutos}`;
}

//document.getElementById("hora").innerText = getHour();

//document.writeln(`<p>Hora:${getHour()}</p>`)

alert("Hora: " + getHour());
