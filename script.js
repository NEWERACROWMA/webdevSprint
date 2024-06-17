document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('no-scroll');
    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].classList.add('active');
        setTimeout(showSlides, 3000);
    }
});