/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function crearIntegrante(indice){
    const integrante = document.createElement('div');
    integrante.className = 'integrante'

    const label = document.createElement('label');
    label.textContent = `Integrante ${indice}`;

    const input = document.createElement('input');
    input.placeholder = 'Ingrese la edad del integrante';
    input.type = 'number';

    integrante.appendChild(label);
    integrante.appendChild(input);

    const contenedor = document.querySelector('#contenedor-integrantes');

    contenedor.appendChild(integrante)
}

document.querySelector("#confirmar-integrantes").onclick = function(){
    reiniciar();
    $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
    for(let i = 0; i < $cantidadIntegrantes; i++){
        crearIntegrante(i+1);
    }
    mostrarBotones()
    

    return false
}

function obtenerEdades(){
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];

    for(let i = 0; i < $integrantes.length; i++){
        edades.push(Number($integrantes[i].value));
    }
    return edades
}

document.querySelector('#calcular').onclick = function(){
    const edades = obtenerEdades()
    
    const edadMayor = calcularMayor(edades);
    document.querySelector('#mayor-edad').textContent = edadMayor;

    const edadMenor = calcularMenor(edades);
    document.querySelector('#menor-edad').textContent = edadMenor;

    const edadPromedio = calcularPromedio(edades);
    document.querySelector('#promedio-edad').textContent = edadPromedio;

    mostrarResultado();
    return false
}

document.querySelector('#resetear').onclick = function(){
    reiniciar()
}

function calcularMayor(listaNumeros){
    let mayor = listaNumeros[0]
    for(let i = 0; i< listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor){
            mayor = listaNumeros[i]
        }
    }
    return mayor
}

function calcularMenor(listaNumeros){
    let menor = listaNumeros[0]
    for(let i = 0; i< listaNumeros.length; i++) {
        if (listaNumeros[i] < menor){
            menor = listaNumeros[i]
        }
    }
    return menor
}

function calcularPromedio(listaNumeros){
    let acumulador = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        acumulador += listaNumeros[i]
    }
    return acumulador / listaNumeros.length
}

function mostrarBotones(){
    document.querySelector('#calcular').className = '';
    document.querySelector('#resetear').className = '';
}

function mostrarResultado(){
    document.querySelector('#resultado').className = '';
}

function ocultarResultado(){
    document.querySelector('#resultado').className = 'oculto';
}

function ocultarBotones(){
    document.querySelector('#calcular').className = 'oculto';
    document.querySelector('#resetear').className = 'oculto';
}
function reiniciar(){
    ocultarResultado()
    ocultarBotones()
    const $integrantes = document.querySelectorAll('.integrante')
    for(let i = 0; i < $integrantes.length; i++){
        $integrantes[i].remove();
    }
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
