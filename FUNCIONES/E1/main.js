
function answers(){
    for(let i=1; i<=5; i++){
    let salute = prompt("Di un saludo:");
    let name = prompt("Di un nombre: ");
    document.write(i + " - " + salute + ", " + name);
    document.write("</br>")

    }
}


answers();