window.onscroll = function () {
    scrollRotate();
}

function scrollRotate() {
    let image = document.querySelector(".zen-circle");
    const rotateStyle = `rotate(${window.scrollY%360}deg)`;
    const translateStyle = 'translate(-50%, -50%)';
    image.style.transform = `${translateStyle} ${rotateStyle}`
    console.log(rotateStyle);
}

$(document).ready(function(){
    const owl = $(".owl-carousel");
    owl.owlCarousel({
        items:1,
        center: true
    });

    $('.project-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    })
  });