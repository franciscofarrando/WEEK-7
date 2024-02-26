function infoCaption(){
    let name = document.getElementById("name").value;
    let sirname = document.getElementById("sirname").value;
    var checkboxes = document.getElementsByName('seat');
    var selectedSeats = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selectedSeats.push(checkboxes[i].value);
        }
    }
   
    document.getElementById("resultName").innerHTML = name;
    document.getElementById("resultSN").innerHTML = sirname;

    var resultDiv = document.getElementById('resultSelection');
    resultDiv.innerHTML = selectedSeats.join(', ');
    
}



