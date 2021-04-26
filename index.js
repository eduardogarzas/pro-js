function recogeDatos(evento) {
    evento.preventDefault();
  
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2021 - fecha;
  
    var bienvenida = document.querySelector("#bienvenida");
    var mensajeEdad;
  
    var mensaje;
  
    if (edad > 30) {
      mensajeEdad = "ya estas grande!";
    } else if (edad < 30) {
      mensajeEdad = "eres todo un niño!";
    } else {
      mensajeEdad = "no lo puedo creer.";
    }
  
    mensaje =
      "<p>Hola, " +
      nombre +
      ", tienes " +
      edad +
      " años, " +
      mensajeEdad +
      "</p>";
  
    bienvenida.innerHTML = mensaje;
  }
  
  var miForm = document.querySelector("#formulario");
  
  miForm.addEventListener("submit", recogeDatos);
  

  

  var grupoTarjetas = ["🥰", "🐶", "🥳", "🥸", "🦁", "🦚", "🐻", "🐙"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});


function acierto(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.add("acertada");
    });
  }
  
  function error(lasTarjetas) {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.add("error");
    });
  
  }

  function descubrir() {
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(
      ".descubierta:not(.acertada)"
    );
  
    if (totalDescubiertas.length > 1) {
      return;
    }
  
    this.classList.add("descubierta");
  
    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if (descubiertas.length < 2) {
      return;
    }
  
    comparar(descubiertas);
  }
  
  function comparar(tarjetasAComparar) {
    if (
      tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
    ) {
      acierto(tarjetasAComparar);
    } else {
      error(tarjetasAComparar);
    }
  }
  