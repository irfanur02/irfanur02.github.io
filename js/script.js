$(document).ready(function () {
    $('.portofolio img').each(function () {
        var maxWidth = 300; // Max width for the image
        var maxHeight = 300; // Max height for the image
        var ratio = 0; // Used for aspect ratio
        var width = $(this).width(); // Current image width
        var height = $(this).height(); // Current image height

        // Check if the current width is larger than the max
        if (width > maxWidth) {
            ratio = maxWidth / width; // get ratio for scaling image
            $(this).css("width", maxWidth); // Set new width
            $(this).css("height", height * ratio); // Scale height based on ratio
            height = height * ratio; // Reset height to match scaled image
        }

        var width = $(this).width(); // Current image width
        var height = $(this).height(); // Current image height

        // Check if current height is larger than max
        if (height > maxHeight) {
            ratio = maxHeight / height; // get ratio for scaling image
            $(this).css("height", maxHeight); // Set new height
            $(this).css("width", width * ratio); // Scale width based on ratio
            width = width * ratio; // Reset width to match scaled image
        }
    })

    $('.page-scroll').on('click', function (e) {
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
        console.log(elemenTujuan.offset().top); // mengetahui / mencari jarak elemen ke atas browser

        //pindahkan scroll
        $('html').animate({
            scrollTop: elemenTujuan.offset().top - 54
        }, 1250, 'swing');

        e.preventDefault();
    })

    $(window).on('load', function () {
        $('.pKiri').addClass('pMuncul');
        $('.pKanan').addClass('pMuncul');
    })

    //parallax
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        //jumbtron
        $('.jumbotron img').css({
            'transform': 'translate(0px, ' + wScroll / 2 + '%)'
        })

        $('.jumbotron h1').css({
            'transform': 'translate(0px, ' + wScroll / 1.123 + '%)'
        })

        $('.jumbotron p').css({
            'transform': 'translate(0px, ' + wScroll / 1.1 + '%)'
        })

        //parallax
        if (wScroll > $('.portofolio').offset().top - 600) {
            $('.portofolio .img-thumbnail').each(function (i) {
                setTimeout(function () {
                    $('.portofolio .img-thumbnail').eq(i).addClass('muncul');
                }, 300 * (i + 1));
            });
        }

    })
})