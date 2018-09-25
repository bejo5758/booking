// ---------------------- Carousel -------------------------
var slideIndex = 0;
carousel();

function carousel(){
    const x = document.getElementsByClassName('mySlides');
    for (var i=0; i<x.length; i++){
        x[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = 'block';
    setTimeout(carousel,2000); // recursion?
}

$(document).ready(function(){
    $('a').on('click', function(event) {
        if (this.hash !== '') {
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
    $('#myCarousel').carousel({interval: 500});

    // Enable Carousel Indicators
    clickCarousel('.item1', '#myCarousel', 0);
    clickCarousel('.item2', '#myCarousel', 1);
    clickCarousel('.item3', '#myCarousel', 2);
    clickCarousel('.item4', '#myCarousel', 3);

    // Enable Carousel Controls
    clickCarousel('.left', '#myCarousel', 'prev');
    clickCarousel('.right', '#myCarousel', 'next');

    function clickCarousel(firstId, secondId, carouselValue) {
        $(firstId).click(function() {
            $(secondId).carousel(carouselValue);
        });
    }
});
// ---------------------- Carousel -------------------------

// ---------------------- Modal -------------------------
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];
var clicks = document.getElementById('buttonss');

btn.addEventListener('click', function () {
    modal.style.display = 'block';
});

span.addEventListener('click', function(){
    modal.style.display = 'hidden';
});

window.addEventListener('click',function(){
});

clicks.addEventListener('click', function(){
    window.open('http://google.com');
});

function sayThanks() {
    const theText = document.getElementById('noPeeps').value;
    if ( theText > 0) {
        text = '<br/> Thank you, the confirmation email has been sent to your inbox!';

    } else {
        text = '<br/> Please insert at least 1 person';
    }
    document.getElementById('demos').innerHTML=text;
    return false;

}
// ---------------------- Modal -------------------------