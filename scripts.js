
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

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 500});

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});


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
