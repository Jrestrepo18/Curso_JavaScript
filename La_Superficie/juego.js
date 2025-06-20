let vida = 5
let miembros = 3
let mochila = []

function estado(){
    console.log("Estado actual");
    console.log("Vida", vida);
    console.log("Miembrs", miembros);
    console.log("Mochila", mochila);
}

console.log("Has logrado sobrevivir al impacto inicial del apagón global. La ciudad es un caos. El grupo tiene pocas provisiones, sin saber qué ocurrió realmente. Todo indica que si no logran encontrar suministros, se convertirán en una estadística más. Hay rumores de una salida segura a través del sistema subterráneo de metro. Pero antes, debes resistir en la superficie el tiempo suficiente para prepararte.");

while(true){
let option_eat = prompt(`
Buscar Comida.

El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela.

¿Dónde buscar recursos vitales?

  Opción A: Ir al supermercado abandonado.
  Opción B: Robar mochila a un sobreviviente.`).toLowerCase();


    if(option_eat === "a"){
        console.log("Has encontrado comida y agua.");
        console.log("Tiene un encuentro leve con un saqueador.");
        console.log("Pierdes una vida.");
        mochila.push("Comida", "Agua");
        vida--;
        break
} 
    else if(option === "b"){

        console.log("Has obtenido una Linterna");
        console.log("Pierdes un miembro por represalia");
        mochila.push("Linterna");
        miembros--;
        break
}

    else{
        console.warn
        ("Opcion no valida, elija una correcta")
    }

}

estado()

while(true){
let option_shelter = prompt(`
Lugar de refugio.

Con algo de alimento en la mochila, el grupo necesita un lugar seguro donde recuperarse y planear el siguiente movimiento. La ciudad no perdona a quienes se quedan mucho tiempo al descubierto.
  
    Opción A: Esconderse en una farmacia.
    Opción B: Ir a una estación de buses.
    Opción C: Refugiarse en una tienda de campaña abandonada.`).toLowerCase();
    
    if(option_shelter === "a"){
        console.log("Has un botiquin.");
        console.log("1 vida.");
        console.log("Pierdes una vida.");
        mochila.push("Botiquin");
        vida++;
        break
} 
    else if(option_shelter === "b"){
        console.log("Hay muchos escombros y te lastimas");
        console.log("- vida, te lastimas.");
        vida--;
        break

}
    else if(option_shelter === "c"){
        console.log("Encuentras una batería portátil, pero hay signos de radioactividad cerca.");
        console.log("- vida por radioactividad");
        mochila.push("Bateria");
        vida--;
        break
}

    else{
        console.warn

        ("Opcion no valida, elija una correcta")
    }

}

estado()

while(true){
let option_help = prompt(`
Ayudar o ignorar

Mientras avanzan, escuchan gritos de auxilio desde un callejón. Ayudar podría ser un acto heroico... o un riesgo innecesario. ¿Cuál será su decisión? 

    Opción A: Ayudar a una familia atrapada
    Opción C: Distraer a los enemigos y liberar a la familia a distancia
    Opción D: Robar los recursos de la familia sin ser vistos`).toLowerCase();
    
    if(option_help === "a"){
        console.log("Ganas un miembro agradecido con recursos.");
        console.log("Ganas un mapa");
        console.log("Pierdes una vida.");
        mochila.push("Mapa");
        miembros++;
        break
} 
    else if(option_help === "b"){
        console.log("No ganas nada");
        console.log("- miembro");
        miembros--;
        break

}
    else if(option_help === "c"){
        console.log("Obtienes comida");
        console.log("-2 miembros");
        mochila.push("comida");
        vida-=2;
        break
}

    else{
        console.warn

        ("Opcion no valida, elija una correcta")
    }

}

estado()

while(true){
let option_help = prompt(`
Señal de humo

Desde lo alto de un edificio, una columna de humo se eleva a lo lejos. ¿Es una señal de auxilio o una trampa mortal? La decisión podría marcar la diferencia.

    Opción A: Investigar la señal
    Opción B: Evitar la zona`).toLowerCase();
    
    if(option_help === "a"){
        console.log("Encuentras gasolina y una llave vieja");
        mochila.push("Gasolina", "Llave");
        break
} 
    else if(option_help === "b"){
        console.log("Evitas una emboscada, pero pierden oportunidad de obtener objetos.");
        break

}
    else{
        console.warn

        ("Opcion no valida, elija una correcta")
    }

}

estado()

while(true){
let option_help = prompt(`
Exploración alta o baja

El grupo necesita información. Las rutas están colapsadas, y moverse sin saber puede ser letal. ¿Mejor buscar una vista panorámica o seguir entre las sombras?

    Opción A: Subir a un edificio a observar
    Opción B: Moverse por callejones
    Opción C: Usar una alcantarilla conectada al metro`).toLowerCase();
    
    if(option_help === "a"){
        console.log(" Encuentras un dron con información.");
        mochila.push("Intel");
        break
} 
    else if(option_help === "b"){
        console.log("Te enfrentas a animales salvajes.");
        vida--;
        break

}
    else if(option_help === "c"){
        console.log("Llegan cerca de una entrada secreta al siguiente nivel.");
        console.log("-2 miembros");
        mochila.push("tarjeta-acceso");
        break
}
    else{
        console.warn

        ("Opcion no valida, elija una correcta")
    }

}

estado()

while(true){
let option_help = prompt(`
Medio de transporte

La noche se acerca. Para avanzar rápido deben decidir: improvisar un medio de transporte o confiar en sus propias fuerzas. El tiempo es limitado.
    Opción A: Reparar una bicicleta
    Opción B: Ir a pie`).toLowerCase();
    
    if(option_help === "a"){
        console.log(" Avanzas rápido, encuentras mochila con recursos.");
        mochila.push("medicinas", "bateria");
        break
} 
    else if(option_help === "b"){
        console.log("Caminas mucho, cansancio general.");
        vida--;
        break

}
    else{
        console.warn

        ("Opcion no valida, elija una correcta")
    }

}

estado()

console.log("A pesar de los riesgos, tu grupo ha logrado reunir recursos vitales. En medio del silencio de la ciudad, encuentran una compuerta metálica marcada con un símbolo de evacuación. El mapa encontrado coincide con un acceso a los túneles del metro. La verdadera prueba está por comenzar bajo tierra, donde la oscuridad y los restos del colapso pondrán a prueba su determinación.")

if (vida >= 3 && mochila.length >= 2 && mochila.includes("Mapa")) {
    console.log("Cumples los requisitos. Puedes ingresar al Túnel del Metro.");
} else {
    console.log("No cumples los requisitos. Quedas atrapado en la ciudad. El juego termina.");
}











