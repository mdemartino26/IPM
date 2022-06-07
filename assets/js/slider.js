			

var numeroImagen=0;

	
	
	//Imprimo el boton que mueve a la derecha
	document.write("<button onclick='mostrarDerecha()'>></button>");

	//Declaro la funcion que me muestra un numero determinado
		function mostrarNumero(numero){
			document.getElementById("imagenes_carrousel").setAttribute("src","assets/imagenes/home/"+numero+".jpg");
				}
	//Declaro la funcion que se ejecuta cuando voy a la izquierda
		function mostrarIzquierda(numero){
			numeroImagen= numeroImagen - 1;
				if(numeroImagen==1){
				numeroImagen=11
				}
		mostrarNumero(numeroImagen);
			}
	//Declaro la funcion que se ejecuta cuando voy a la derecha
		function mostrarDerecha(numero){
				numeroImagen= numeroImagen + 1;
				if(numeroImagen==11){
					numeroImagen=1 
					}
		mostrarNumero(numeroImagen);
			}
		var intervalo = setInterval(mostrarDerecha,10000);

			