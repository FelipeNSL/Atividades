const cor = document.querySelector("#cor");
const pegarfundo = document.querySelector("body")

function mudarCor(){
	 pegarfundo.style.backgroundColor = "#"+cor.value;
}