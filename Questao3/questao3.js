const segundos = document.querySelector("#segundos");
const mostrar = document.querySelector("#mostrar");
const minutos = document.querySelector("#minutos");
const horas = document.querySelector("#horas");

var intervalo;

const crono = function(){ 
	var hora = horas.value;
    var minuto = minutos.value;
    var segundo = segundos.value;
 intervalo =  setInterval(function(){
  		if(segundo ==0 && minuto ==0 && hora == 0){
  			clearInterval(intervalo);
  		}
		if(segundo >= 0  && segundo <=59){
			if (segundo > 0) {
				mostrar.innerText = +hora+":"+minuto+":"+segundo;
				segundo--;
			}else if(segundo == 0){
				if(minuto == 0 && hora !=0){
					mostrar.innerText = hora+":"+minuto+":"+segundo;
					minuto =59;
					segundo=59;
					hora--;
				}else{
					mostrar.innerText = hora+":"+minuto+":"+segundo;
					segundo =59;
					minuto--;	
				}			
			}

		}
	},1000);
 }
