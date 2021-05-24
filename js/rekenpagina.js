var invoer = 2; 
var product;
var genereer;

window.onload = function(){
    product = document.getElementById("tafel-ant");
    genereer = document.getElementById("knop");
    invoer = document.getElementById("invoer");

    genereer.onclick = function(){
       console.log(invoer*2); 
    }

}