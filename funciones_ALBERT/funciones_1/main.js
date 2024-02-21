// function preguntarPalabras() { //2
//   let palabraFav = prompt("dime tu palabra favorita");
//   let diaFav = prompt("dime tu dia de la semana favorito");
//   mostrarFrase(palabraFav, diaFav); //3 exportar datos a la otra f
// }

// function mostrarFrase(palabraFav, diaFav) {//4 recibe datos de la otra f
//   document.write("me gusta la palabra '" + palabraFav + "' sobre todo el " + diaFav)
// }

/*
function preguntarPalabras() { //2
    let palabraFav = prompt("dime tu palabra favorita");
    let diaFav = prompt("dime tu dia de la semana favorito");
    let fraseFinal = "me gusta la palabra '" + palabraFav + "' sobre todo el " + diaFav;
    return fraseFinal; //3 a donde lo retorna? Necesita variable
  }

let fraseFinal2 = preguntarPalabras(); //1

document.write(fraseFinal2); //4
*/
/*
function masOMenos(recibeNumero){
    if(recibeNumero>10){
        return "es mayor de 10";
    } else {
        return "es menor de 10";
    }
}

let numeroUsuario = parseInt(prompt("dime un numero"));
let enviarNumero = masOMenos(numeroUsuario);

document.write(enviarNumero);
*/

function holaMundo(){
    console.log("estoy dentro de la funcion holaMundo")
    alert("Hola mundo"); 
}

for(let i=0; i<5; i++){
    holaMundo();
}
