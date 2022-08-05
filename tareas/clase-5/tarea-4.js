document.querySelector("#calcular").onclick = function(){
    const $arrayNumeros = document.querySelectorAll("li");
    const numeros = [];
    for(let i = 0; i < $arrayNumeros.length; i++){
        numeros.push(Number($arrayNumeros[i].innerText))
    }

    

    const numeroPromedio= calcularPromedio(numeros)
    const numeroMenor = calcularMenor(numeros) 
    const numeroMayor = calcularMayor(numeros)
    const numeroFrecuente = calcularFrecuente(numeros)


    
    document.querySelector("#numero-promedio").innerText = `El promedio es: ${numeroPromedio}`
    document.querySelector("#numero-menor").innerText = `El número más pequeño es: ${numeroMenor}`
    document.querySelector("#numero-mayor").innerText = `El número más grande es: ${numeroMayor}`
    document.querySelector("#numero-frecuente").innerText = `El numero más frecuente es: ${numeroFrecuente}`


}




function calcularPromedio(listaNumeros){
    let acumulador = 0;
    for(let i= 0; i < listaNumeros.length; i++){
        acumulador += listaNumeros[i]
    }
    return acumulador / listaNumeros.length
}

function calcularMayor(listaNumeros){
    let numeroMayor = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] > numeroMayor){
            numeroMayor = listaNumeros[i]
        }        
    }
    return numeroMayor
}

function calcularMenor(listaNumeros){
    let numeroMenor = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++){
        if (listaNumeros[i] < numeroMenor){
            numeroMenor = listaNumeros[i]
        }
    }
    return numeroMenor
}

function calcularFrecuente(listaNumeros){
    let numeroRepetido = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        if(listaNumeros[i] === listaNumeros[i+1]){
            numeroRepetido = listaNumeros[i]
        }
    }
    return numeroRepetido
}