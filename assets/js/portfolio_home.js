//arrays
var imag=["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var titulo = ["Titulo 1", "Titulo", "Titulo", "Titulo", "Titulo", "Titulo", "Titulo", "Titulo", "Titulo", "Titulo"];
var paragraph = ["You waited so long, I’m so sorry,", "Now I made up my mind, are you ready?", "I was lost for such a long time", "But don’t worry now, I won’t ever leave again", "Each time you called me, I wasn’t there, silence", "But don’t worry, I’ve arrived, shall we dance", "Let’s raise our glasses, now hold my hand", "From now on, I won’t ever let you go", "It has started, our romance", "You’re ready and I’m ready", "There’s no need to be afraid, no need to hesitate", "Let’s go up up, our love"];

//Hago el for para que ponga las imagenes y el onclick
for(i=1; i<7; i++)
	{
		document.getElementById("portfolios").innerHTML += "<figure><a href='portfolio.html'><img src='assets/imagenes/portfolio/"+ imag[i]+".jpg'><figcaption class='transparencia'><p>"+ paragraph[i] + "</p></figcaption></a></figure>";
	}

	