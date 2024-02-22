function questions(){
    let number1 = parseInt(prompt("Elegi un numero"));
    let number2 = parseInt(prompt("Elegi otro numero"));
    let action = prompt("Quieres sumar o restar? + o -");

        if (action == "sumar" || action == "+"){
        let suma = (number1+number2);
        
        document.write("Tu suma es: " + number1  + " + " + number2 + " = " + suma);
        
        }else if (action == "restar" || action == "-"){
            let resta = (number1-number2);
            
            document.write("Tu resta es: " + number1  + " - " + number2 + " = " + resta);
            
        }else{
            document.write("Ha habido un error");
        }
}

questions();