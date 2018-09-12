
var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel,2000);
}

var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

function sayThanks() {
    x = document.getElementById("noPeeps").value;
    if ( x > 0) {
        text = "<br/> Thank you, the confirmation email has been sent to your inbox!";
    } else {
        text = "<br/> Please insert at least 1 person";
    }
    document.getElementById("demos").innerHTML=text;

}
