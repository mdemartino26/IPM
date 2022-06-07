var numeroImagen=0;


	//Imprimo los 5 botones de cada imagen
	for (var i = 1; i <5; i++) {
		document.write("<button onclick='mostrarNumero("+ i +")'>" + i + "</button>");
	}


	//Declaro la funcion que me muestra un numero determinado
	function mostrarNumero(numero){
		document.getElementById("imagen").setAttribute("src","assets/imagenes/equipo/"+numero+".jpg");
	}

	//Declaro la funcion que se ejecuta cuando voy a la izquierda
	function mostrarIzquierda(numero){
		numeroImagen= numeroImagen - 1;
		if(numeroImagen==1){
			numeroImagen=5
		}
		mostrarNumero(numeroImagen);

		
	}

	//Declaro la funcion que se ejecuta cuando voy a la derecha
	function mostrarDerecha(numero){
		numeroImagen= numeroImagen + 1;
		if(numeroImagen==5){
			numeroImagen=1 
		}
		mostrarNumero(numeroImagen);
		
	}