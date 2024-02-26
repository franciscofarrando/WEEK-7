function infoCaption(){
    let name = document.getElementById("name").value;
    let sirname = document.getElementById("sirname").value;
    let checkboxes = document.getElementsByName('seat');
    let selectedSeats = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedSeats.push(checkboxes[i].value);
        }
    }
   
    document.getElementById("resultName").innerHTML = name;
    document.getElementById("resultSN").innerHTML = sirname;

    let resultDiv = document.getElementById('resultSelection');
    resultDiv.innerHTML = selectedSeats.join(', ');
    
}



