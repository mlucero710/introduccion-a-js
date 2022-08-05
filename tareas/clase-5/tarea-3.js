document.querySelector("#calcular").onclick = function() {
    const $horas = document.querySelectorAll(".horas-video");
    const $minutos = document.querySelectorAll(".minutos-video");
    const $segundos = document.querySelectorAll(".segundos-video");
    const $resultadoCalculo = document.querySelector("#resultado-calculo");

    let totalHoras = sumarTiempo($horas);
    let totalMinutos = sumarTiempo($minutos);
    let totalSegundos = sumarTiempo($segundos);

    if (totalMinutos > 60){
        totalHoras = parseInt(totalHoras + (totalMinutos / 60));
        totalMinutos %= 60;
    }


    if (totalSegundos > 60){
        totalMinutos = parseInt(totalMinutos + (totalSegundos / 60));
        totalSegundos %= 60;
    }

    const textoResultado = document.createTextNode(` ${totalHoras} horas ${totalMinutos} minutos y ${totalSegundos} segundos`);
    $resultadoCalculo.appendChild(textoResultado);
        
   
}
function sumarTiempo(tiempo){
    let totalTiempo = 0;
    for (let i = 0; i < tiempo.length; i++){
         
        totalTiempo += Number(tiempo[i].value);
        
    }
    return totalTiempo;
}

document.querySelector("#reset").onclick = function() {
    document.querySelector("#resultado-calculo").textContent = "El tiempo total es de: "
}
