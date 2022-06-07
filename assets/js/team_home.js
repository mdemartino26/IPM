//arrays
var imag=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var nombre = [ "Marian De Martino", "Im Changkyun", "Yoo Kihyun", "Lee Jooheon", "Chae Hyungwon", "Son Shownu", "Lee Minhyuk", "Lee Wohno", "Kim Yugyeom"];

//Hago el for para que ponga a las personas
for(i=0; i<3; i++)
	{
		document.getElementById("team_index").innerHTML += "<article class='team'><img src='assets/imagenes/equipo/team/"+ imag[i]+".jpg'><h3>"+ nombre[i] + "</h3></article>";
	}

	