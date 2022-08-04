document.querySelector("#ingresar").onclick = function(){   
    const $bienvenida = document.querySelector("#bienvenida-bar")
    const $nombreUsuario = document.querySelector("#nombre-usuario").value
    const $segundoNombreUsuario = document.querySelector("#nombre-usuario-2").value
    const $apellidoUsuario = document.querySelector("#apellido-usuario").value
    const $edadUsuario = document.querySelector("#edad-usuario").value

    const NOMBRE_COMPLETO = `${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario}`
    if (NOMBRE_COMPLETO.trim().length === 0){
        alert("Por favor, ingresá un nombre válido")
    }
    if ($edadUsuario <= 0){
        alert("Por favor, ingresá una edad válida")
    } else {
    const resultadoEntrada =document.querySelector("#resultado-entrada")
    const textoBar = document.createElement('p');
    const respuestaBar = document.createTextNode(`Hola! te llamas ${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario}, y tenes ${$edadUsuario} años`)

    textoBar.appendChild(respuestaBar)
    resultadoEntrada.appendChild(textoBar)
    $bienvenida.textContent =(`Bienvenido ${$nombreUsuario} !`)

    }
}

