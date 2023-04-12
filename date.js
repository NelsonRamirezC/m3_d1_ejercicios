let fecha = new Date();

//console.log(fecha);

let fechaConMilisegundos = new Date(1000000);

//console.log(fechaConMilisegundos);

//new Date(year, month, day, hours, minutes, seconds, milliseconds);

let fechaConDetalle = new Date(2023, 3, 12, 12, 11);
//console.log(fechaConDetalle);

let fechaConFormato = new Date().toLocaleDateString("es-ES", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
//console.log(fechaConFormato);

function getHour() {
  let horaActual = new Date();
  return `${horaActual.getHours()}:${horaActual.getMinutes()}`;
}

function getFecha() {
  let fechaActual = new Date();
  let meses = ["enero", "febrero", "marzo", "abril"];
  return `${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}`;
}

let fecha2 = new Date();
let anio = fecha2.getFullYear();
let mes = fecha2.getMonth();
let dia = fecha2.getDate();
let hora = fecha2.getHours();
let minutos = fecha2.getMinutes();
console.log("año: ", anio);
let meses = ["enero", "febrero", "marzo", "abril"];
console.log("mes:", meses[mes]);
console.log("Día:", dia);
console.log("Hora:", hora);
console.log("Minutos:", minutos);

console.log("Hora actual:", getHour());
console.log("Fecha Actual:", getFecha());
