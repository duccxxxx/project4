var invoer = ""; 
var productTafel;
var genereer;
var macht;
var btnMacht;
var productMacht;
var btnBreuk;



window.onload = function(){
    productTafel = document.getElementById("tafel-ant");
    productMacht = document.getElementById("macht-ant");
    genereer = document.getElementById("knop");
    btnMacht = document.getElementById("btn-macht");
    invoer = document.getElementById("invoer").value;
    macht = document.getElementById("macht").value;
    btnBreuk = document.getElementById("btn-breuk");

    genereer.onclick = function(){
       productTafel.innerHTML = 
        "1x"+invoer+"="+1*invoer+"<br>"
       +"2x"+invoer+"="+2*invoer+"<br>"
       +"3x"+invoer+"="+3*invoer+"<br>"
       +"4x"+invoer+"="+4*invoer+"<br>"
       +"5x"+invoer+"="+5*invoer+"<br>"
       +"6x"+invoer+"="+6*invoer+"<br>"
       +"7x"+invoer+"="+7*invoer+"<br>"
       +"8x"+invoer+"="+8*invoer+"<br>"
       +"9x"+invoer+"="+9*invoer+"<br>"
       +"10x"+invoer+"="+10*invoer+"<br>";
    }

    btnMacht.onclick = function(){
        productMacht.innerHTML = 
        macht+"x"+macht+"="+macht*macht+"<br>"+
        macht+"x"+macht+"x"+macht+"="+macht*macht*macht+"<br>"+
        macht+"x"+macht+"x"+macht+"x"+macht+"="+macht*macht*macht*macht+"<br>"+
        macht+"x"+macht+"x"+macht+"x"+macht+"x"+macht+"="+macht*macht*macht*macht*macht+"<br>";
    }
    
    btnBreuk.onclick = function genereerTafel() {
    var vermenigvuldigtal = document.getElementById("breuktal").value; // De invoer van de gebruiker
    var maxVermenigvuldiger = document.getElementById("breuk-max").value;
    var antwoordVeld = document.getElementById("breuk-antwoord");
    
    antwoordVeld.value = ""; // We beginnen elke reeks met een leeg antwoord veld

    for(var vermenigvuldiger = 1; vermenigvuldiger <= maxVermenigvuldiger; vermenigvuldiger++) {
        var product = vermenigvuldiger / vermenigvuldigtal;  // We rekenen het product uit van 1 vermenigvuldiging
        var vermenigvuldiging = vermenigvuldiger + " / " + vermenigvuldigtal + " = " + product+"|"; // Dit is de tekstuele berekening die we kunnen toevoegen aan het antwoordveld.
        antwoordVeld.innerHTML += vermenigvuldiging + "\n"; // We de berekening toe aan het antwoord veld afgesloten met een nieuwe regel \n
    }

    return false; // We moeten false returnen, om te voorkomen dat de browser de pagina herlaad.
}
}
