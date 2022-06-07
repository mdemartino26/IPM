var imagen = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var i = 0;

	function adelante(){
		if(i<imagen.length-7) {
			i = i+1;

			document.getElementById("caja").innerHTML = '<img src="assets/imagenes/home/'+ imagen[i] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+1] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+2] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+3] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+4] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+5] +'.jpg" alt=""> <img src="assets/imagenes/home/'+ imagen[i+6] +'.jpg" alt="">'
		} 
		else {
		 	i=0;
		}
	}

	

	setInterval(adelante,1000);

