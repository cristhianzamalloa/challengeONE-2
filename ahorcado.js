function establecerCaracteres(e) {

	  var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = "abcdefghijklmnopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

function dibujarBase() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(0,380);
	pincel.lineTo(280,380);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 5;
	pincel.stroke();

}

function dibujarAsta() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(60,100);
	pincel.lineTo(60,380);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 5;
	pincel.stroke();

}

function dibujarCabecera() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(60,100);
	pincel.lineTo(237,100);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 5;
	pincel.stroke();

}

function dibujarGancho() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,100);
	pincel.lineTo(237,120);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 4.5;
	pincel.stroke();

}

function dibujarCabeza() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.arc(237,140,20,0,2*Math.PI);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarCuerpo() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,160);
	pincel.lineTo(237,290);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarBrazoIzquierdo() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,160);
	pincel.lineTo(207,200);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarBrazoDerecho() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,160);
	pincel.lineTo(267,200);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarPiernaIzquierda() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,290);
	pincel.lineTo(207,330);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarPiernaDerecha() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(237,290);
	pincel.lineTo(267,330);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

//***  CONTINUAR ACA - DANDO PARAMETROS A LOS CUADRADOS
function	dibujarCuadros(x,360,tamano,400) {

		pincel.fillStyle = "blue";
    pincel.fillRect(x, 360, tamano, tamanho)
    pincel.fill();


    if (numeroLetras	= 8) {


    }


}

function irPrincipal() {

	//commandos para ocultar y mostrar las páginas
	document.getElementById("titulo").style.display = "";
	document.getElementById("principal").style.display = "";
	document.getElementById("nuevaPalabra").style.display = "none";
	document.getElementById("tablero").style.display = "none";	
	
}

function irTablero() {

	document.getElementById("titulo").style.display = "";
	document.getElementById("principal").style.display = "none";
	document.getElementById("nuevaPalabra").style.display = "none";
	document.getElementById("tablero").style.display = "";	
}

function activarBotonIniciarJuego() {

	var buttonIniciar = document.querySelector('buttonIniciar');

	irTablero();

}

function activarBotonAgregarPalabra() {

	var buttonAgregarPalabra = document.querySelector('buttonAgregarPalabra');

	document.getElementById("titulo").style.display = "";
	document.getElementById("principal").style.display = "none";
	document.getElementById("nuevaPalabra").style.display = "";
	document.getElementById("tablero").style.display = "none";

}

function activarBotonCancelar() {

	var buttonCancelar = document.querySelector('buttonCancelar');

	irPrincipal();

}

function activarBotonDesistir() {

	var buttonDesistir = document.querySelector('buttonDesistir');

	irPrincipal();

}

function activarBotonNuevoJuego() {

	var buttonNuevoJuego = document.querySelector('buttonNuevoJuego');

	irTablero();

}
//***
function escogerPalabraSecreta () {

	var palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];	

	var numeroLetras = palabraSecreta.length;

	var letraPalabra = palabraSecreta.split(""); //Para separar la palabra secreta en letras
    
    
}

function agregarInputs () {

	//para agregar la palabra al Arraay	
	var agregarPalabra = document.getElementById("palabra").value;

	palabras.push(agregarPalabra); 

	var palabrasTotales = "";

	for (i = 0; i < palabras.length; i++) { 

		palabrasTotales = palabrasTotales + palabras[i];

	}

	palabra.value = ""; //Para limpiar el input una vez que se guarda la palabra
	
	alert("La palabra (" + agregarPalabra.toUpperCase() + ") fue agregada");

	//Para activar el botón guardar
	var buttonGuardar = document.querySelector('buttonGuardar');


	irTablero();

	escogerPalabraSecreta();

}




var palabras = ['Alura', 'Oracle', 'Latam'];

    





dibujarBase();
dibujarAsta();
dibujarCabecera();
dibujarGancho();
dibujarCabeza();
dibujarCuerpo();
dibujarBrazoIzquierdo();
dibujarBrazoDerecho();
dibujarPiernaIzquierda();
dibujarPiernaDerecha();


irPrincipal();

buttonAgregarPalabra.onclick = activarBotonAgregarPalabra;
buttonCancelar.onclick = activarBotonCancelar;
buttonIniciar.onclick = activarBotonIniciarJuego;
buttonDesistir.onclick = activarBotonDesistir;
buttonNuevoJuego.onclick = activarBotonNuevoJuego;
buttonGuardar.onclick = agregarInputs;