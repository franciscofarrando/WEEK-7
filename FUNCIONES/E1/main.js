function quantity(){
 let a = parseInt(prompt("Cuantas veces queres que te pregunte (maximo 5 veces):"));
 answers(a);
}

function answers(a){
    for(let i=1; i<=a; i++){
    let salute = prompt("Di un saludo:");
    let name = prompt("Di un nombre: ");
    document.write(i + " - " + salute + ", " + name);
    document.write("</br>");

    }
}


quantity();