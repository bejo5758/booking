// ---------------------- Carousel -------------------------
(function() {
    var slideIndex = 0;
    carousel();

    function carousel(){
        const x = document.getElementsByClassName('mySlides');
        if (x[slideIndex]) {
            const slideLength = x.length;
            for (var i = 0; i < slideLength; i++){
                x[i].style.display = 'none';
            }

            slideIndex += 1;
            if(slideIndex >= slideLength) {
                slideIndex = 0;
            }
            x[slideIndex].style.display = 'block';
            setTimeout(carousel,2000); // recursion?
        }
    }

    let anchorlinks = document.querySelectorAll('a[href^="#"]')

    for (let item of anchorlinks) { // relitere
        item.addEventListener('click', (e)=> {
            let hashval = item.getAttribute('href')
            let target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            history.pushState(null, null, hashval)
            e.preventDefault()
        })
    };


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
})();
