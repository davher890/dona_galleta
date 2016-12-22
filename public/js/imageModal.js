/**
 * Created by usuario on 10/12/16.
 */


function showModal(data) {

    // Get the modal
    var modal = $('#myModal');

    var oldCarousel = $('#myModal').find('ol.carousel-indicators');
    var carouselInner = $('#myModal').find('.carousel-inner');

    var info = JSON.parse($(data).attr('data-data'));
    var imgs = info.img;

    for (var i = 0; i < imgs.length; i++) {
        if (i == 0) {
            oldCarousel.append("<li class='active' data-target='#carousel-example-1' data-slide-to='" + i + "' />");
            carouselInner.append("<div class='carousel-item active'><img style='margin:auto' src='" + imgs[i] + "'/></div>");
        } else {
            oldCarousel.append("<li data-target='#carousel-example-1' data-slide-to='" + i + "' />");
            carouselInner.append("<div class='carousel-item'><img style='margin:auto' src='" + imgs[i] + "'/></div>");
        }

    }

    // Get the image and insert it inside the modal - use its "alt" text as a caption
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
