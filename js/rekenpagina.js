var invoer = ""; 
var productTafel;
var genereer;
var macht;
var btnMacht;
var productMacht;


window.onload = function(){
    productTafel = document.getElementById("tafel-ant");
    productMacht = document.getElementById("macht-ant");
    genereer = document.getElementById("knop");
    btnMacht = document.getElementById("btn-macht");
    invoer = document.getElementById("invoer").value;
    macht = document.getElementById("macht").value;

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
}