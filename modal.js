// ---------------------- Modal -------------------------
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var close = document.getElementsByClassName('close')[0];
var clicks = document.getElementById('buttonss');

btn.addEventListener('click', function () {
    modal.classList.add('visible');
});

close.addEventListener('click', function(){
    modal.classList.remove('visible');
});

clicks.addEventListener('click', function(){
    window.open('http://google.com');
});

window.addEventListener('click',function(event){
    if (event.target == modal){
        modal.classList.remove('visible');
}
});

function sayThanks() {
    const message = document.getElementById("noPeeps").value;
    if ( message > 0) {
        text = "<br/> Thank you, the confirmation email has been sent to your inbox!";
    } else {
        text = "<br/> Please insert at least 1 person";
    }
    document.getElementById("demos").innerHTML=text;
    return false;

}
// ---------------------- Modal -------------------------/**
