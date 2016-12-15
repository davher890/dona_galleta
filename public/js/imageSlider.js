var slideIndex = 1;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    if (x[slideIndex - 1]) {
        x[slideIndex - 1].style.display = "block";
    }
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (x[slideIndex - 1]) {
        x[slideIndex - 1].style.display = "block";
    }
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}
  