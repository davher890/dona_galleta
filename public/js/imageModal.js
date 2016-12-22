/**
 * Created by usuario on 10/12/16.
 */


function showModal(data) {

    // Get the modal
    var modal = $('#myModal');

    var oldCarousel = $('#myModal').find('ol.carousel-indicators');
    var carouselInner = $('#myModal').find('.carousel-inner');
    var modalTitle = $('#myModal').find('.card-title');
    var modalText = $('#myModal').find('.card-text');

    var info = JSON.parse($(data).attr('data-data'));

    modalTitle.html(info.nombre);
    modalText.html(info.descripcion);

    var imgs = info.img;

    var oldCarouselhtml = "";
    var carouselInnerhtml = "";
    for (var i = 0; i < imgs.length; i++) {
        oldCarouselhtml += "<li ";
        carouselInnerhtml += "<div class='carousel-item ";
        if (i == 0) {
            oldCarouselhtml += "class='active'";
            carouselInnerhtml += "active";
        }
        oldCarouselhtml += " data-target='#carousel-example-1' data-slide-to='" + i + "' />";
        carouselInnerhtml += "' style='max-width:50%; max-height:50%; margin:auto;'><img src='" + imgs[i] + "'/></div>";
    }
    oldCarousel.html(oldCarouselhtml);
    carouselInner.html(carouselInnerhtml);

    var modalImg = $("#img01");
    var captionText = $("#caption");
    modal.css('display', 'block');
    modalImg.attr('src', data.src);
    captionText.html(data.alt);

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on <span> (x), close the modal
    span.click(function() {
        modal.css('display', 'none');
    });
}


function showContactForm() {
    if ($('#contactForm').css('visibility') === 'hidden') {
        $('#contactForm').css('visibility', 'visible')
    } else {
        $('#contactForm').css('visibility', 'hidden')
    }
}
