// function infoCaption(){
//     let height = document.getElementById("height").value;
//     let weight = document.getElementById("weight").value;
//     imcCalc = weight/(height*height);
//     let realImc = imcCalc.toFixed(2);
    
    
//         if (realImc < "18.4"){
//         document.getElementById("resultado").innerHTML = "Su IMC es " +realImc + ": Insuficiente Ponderal";
//         }else if (realImc > "18.5" && realImc < "24.9"){
//         document.getElementById("resultado").innerHTML = "Su IMC es " +realImc + ": Peso Normal";
//         }else if (realImc > "25" && realImc < "29.9"){
//          document.getElementById("resultado").innerHTML = "Su IMC es:" +realImc + ": Sobrepeso";
//         }else if (realImc > "30" && realImc < "34.9"){
//         document.getElementById("resultado").innerHTML = "Su IMC es " +realImc + ": Obesidad I";
//         }else if (realImc > "35" && realImc < "39.9"){
//             document.getElementById("resultado").innerHTML = "Su IMC es " +realImc + ": Obesidad II";
//         }else{
//         document.getElementById("resultado").innerHTML = "Su IMC es " +realImc + ": Obesidad III";}

// }


function infoCaption(){
    let name = document.getElementById("name").value;
    let sirname = document.getElementById("sirname").value;
    let seat = document.getElementById("seat").value;
    data = name, sirname, seat

    document.getElementById("resultName").innerHTML = name;
    document.getElementById("resultSN").innerHTML = sirname;
    document.getElementById("resultSeat").innerHTML = seat;
}


