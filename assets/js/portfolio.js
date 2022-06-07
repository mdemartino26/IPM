
//arrays
var imag=["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var titulo = ["", "Titulo1", "Titulo2", "Titulo3", "Titulo4", "Titulo5", "Titulo6", "Titulo7", "Titulo8", "Titulo9", "Titulo10", "Titulo11", "Titulo12"];
var paragraph = ["", "You waited so long, I’m so sorry,", "Now I made up my mind, are you ready?", "I was lost for such a long time", "But don’t worry now, I won’t ever leave again", "Each time you called me, I wasn’t there, silence", "But don’t worry, I’ve arrived, shall we dance", "Let’s raise our glasses, now hold my hand", "From now on, I won’t ever let you go", "It has started, our romance", "You’re ready and I’m ready", "There’s no need to be afraid, no need to hesitate", "Let’s go up up, our love"]; 

//Hago el for para que ponga las imagenes y el onclick
for(i=1; i<13; i++)
	{
		document.getElementById("trabajos").innerHTML += "<figure class='portfolio'><img src='assets/imagenes/portfolio/"+ imag[i]+".jpg'><figcaption class='nover'><p>"+ paragraph[i] + "</p><a onclick='showme("+ i +")' class='button'> Ver mas </a></figcaption></figure>";
	}

//Declaro la funcion pra el onclick
function showme(num) {

	document.getElementById("over").setAttribute("class", "mostrar"); //Cuando se clickea el ver mas se va a mostrar el over
	document.getElementById("imagengrande").setAttribute("src", "assets/imagenes/portfolio/"+ num +".jpg"); //Se muestra la imagen sobre la que se clickeo
	document.getElementById("contenedorh1").innerHTML = titulo[num]; //Crea el contenedor del h1 
	document.getElementById("contenedorp").innerHTML = paragraph[num]; //Crea el contenedor del p



}

//Declaro la funcion para que no se muestre, esto reestablecela funcion a la clase nover == display none
function dontshowme() {
	document.getElementById("over").setAttribute("class", "nover");
}

