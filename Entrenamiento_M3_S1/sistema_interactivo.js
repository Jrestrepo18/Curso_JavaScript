console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

// Capturar informacion del usurio.

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");

// Convierte la edad en numero.

edad = parseInt(edad);

// Validar y mostrar mensajes.

if(isNaN(edad)){
    console.error("Error: Por favor, ingrese una edad válida en números. ");

} else if(edad < 18){
    alert(`Hola ${nombre} eres menor de edad. ¡sigue aprendiendo y disfrutando del codigo!`);

} else {
    alert(`Hola ${nombre} eres mayor de edad. ¡Preparate para grandes oportunidades en el mundo de la programación`)
}

