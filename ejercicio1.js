function suma(num1, num2) {
  return `El resultado es ${num1 + num2}`;
}

function resta(num1, num2) {
  return `El resultado es ${num1 - num2}`;
}

function multiplicacion(num1, num2) {
  return `El resultado es ${num1 * num2}`;
}

alert("Bienvenido a la calculadora");

let numero;

do {
  numero = parseInt(
    prompt(
      "Elija una opción:\n1.-Sumar\n2.- Restar\n3.- Multiplicar\n4.- Salir"
    )
  ); // Validacion

  if (!numero) {
    alert("no es numero");
  } else {
    if (numero == 1) {
      let num1 = parseInt(prompt("Escoja un número"));

      while (!num1) {
        num1 = parseInt(prompt("Debes escoger un numero"));
      }

      let num2 = parseInt(prompt("Escoja otro numero"));

      while (!num2) {
        num2 = parseInt(prompt("Debes escoger un numero"));
      }

      alert(suma(num1, num2));
    } else if (numero == 2) {
      let num1 = parseInt(prompt("Escoja un número"));

      while (!num1) {
        num1 = parseInt(prompt("Debes escoger un numero"));
      }

      let num2 = parseInt(prompt("Escoja otro numero"));

      while (!num2) {
        num2 = parseInt(prompt("Debes escoger un numero"));
      }

      alert(resta(num1, num2));
    } else if (numero == 3) {
      let num1 = parseInt(prompt("Escoja un número"));

      while (!num1) {
        num1 = parseInt(prompt("Debes escoger un numero"));
      }

      let num2 = parseInt(prompt("Escoja otro numero"));

      while (!num2) {
        num2 = parseInt(prompt("Debes escoger un numero"));
      }

      alert(multiplicacion(num1, num2));
    } else if (numero == 4) {
      alert("Adios");
    } else {
      alert("Debes escoger entre las opciones");
    }
  }
} while (numero != 4);
