//Pido dato al usuario 

var usuario = prompt("Ingrese un numero del 1 al 10 para participar de una adivinanza")

// Parseo dato del usuario 

var parseo = parseInt(usuario)

//Hago que el dato ingresado por el usuario aparezca en la consola
var resultadoParseo = console.log("El numero que ingreso el usuario es " + parseo)

//Condicional 
if (parseo === 5){
    alert("Felicitaciones, adivinaste!")
} else{
    alert("Lo siento no adivinaste!")
}