function dibujarBase() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(0,149);
	pincel.lineTo(300,149);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarAsta() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(80,0);
	pincel.lineTo(80,149);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 5;
	pincel.stroke();

}

function dibujarCabecera() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.moveTo(80,1);
	pincel.lineTo(257,1);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarGancho() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,0);
	pincel.lineTo(257,20);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 4.5;
	pincel.stroke();

}

function dibujarCabeza() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");

	pincel.beginPath();
	pincel.arc(257,31,10,0,2*Math.PI);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarCuerpo() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,40);
	pincel.lineTo(257,100);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarBrazoIzquierdo() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,40);
	pincel.lineTo(227,60);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarBrazoDerecho() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,40);
	pincel.lineTo(287,60);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarPiernaIzquierda() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,100);
	pincel.lineTo(227,120);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

function dibujarPiernaDerecha() {
	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	
	pincel.beginPath();
	pincel.moveTo(257,100);
	pincel.lineTo(287,120);
	pincel.strokeStyle = "white";
	pincel.lineWidth = 3;
	pincel.stroke();

}

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