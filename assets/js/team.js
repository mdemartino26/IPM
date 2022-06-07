//arrays

var photo = ["1","2","3","4","5","6","7","8", "9"];
var nombre = ["Marian De Martino", "Im Changkyun", "Yoo Kihyun", "Lee Jooheon", "Chae Hyungwon", "Son Shownu", "Lee Minhyuk", "Lee Wohno", "Kim Yugyeom"];
var position= ["CEO", "Director", "Sonidista", "Tecnico", "Ejecutivo", "Creativo", "Tecnico", "Partner", "Gerente"];
var parrafo= ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];

//hago el for para que me muestre cada persona con su imagen y texto
for(i=0; i<9; i++)
	{
		document.getElementById("personas").innerHTML += "<figure class='equipo'><img src='assets/imagenes/equipo/team/"+ photo[i]+".jpg'><figcaption  class='informacion'><h2>"+ nombre[i] + "</h2><h3>"+ position[i] + "</h3><p>"+ parrafo[i] + "</p></figcaption></figure>";
	}