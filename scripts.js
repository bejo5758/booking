// ---------------------- Carousel -------------------------
var slideIndex = 0;
carousel();

function carousel(){
    const slides = document.getElementsByClassName("mySlides");
    for (var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
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

    for (var i=0; i<4; i++){
        clickCarousel(`item${i+1}`, '#myCarousel', i);
    }

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

