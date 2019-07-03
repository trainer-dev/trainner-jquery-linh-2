$(document).ready(function(){
    var slideIndex = 1;
    var slideNext = slideIndex + 1;
    var slidePrev = slideIndex -1;

    showDivs(slideIndex);
    showPrev(slidePrev);
    showNext(slideNext);

    $('.next').hide();
    $('.previous').hide();

    function showDivs(num) {
        var i;

        var element = $('.mySlides');
        var dots = $(".dot");

        if (num > element.length)
            slideIndex = 1;
        if (num<1)
            slideIndex = element.length;

        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none';
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        element[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].className += " current";

        dots[slideIndex-1].className += " active";

    }

    function showNext(num) {
        var i;

        var element = document.getElementsByClassName('next');

        if (num > element.length)
            slideNext = 1;
        if (num<1)
            slideNext = element.length;

        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none';
        }

        element[slideNext-1].style.display = 'block';
    }

    function showPrev(num) {
        var i;

        var element = document.getElementsByClassName('previous');
        var text = document.getElementsByClassName('text-block');

        if (num > element.length)
            slidePrev = 1;
        if (num<1)
            slidePrev = element.length;

        for (i = 0; i < element.length; i++) {
            element[i].style.display = 'none';
        }

        for (i=0; i<text.length; i++)
            text[i].style.display = 'none';

        element[slidePrev-1].style.display = 'block';
        text[slidePrev-1].style.display = 'block';

    }

    function previous() {
        showDivs(slideIndex -= 1);

        showPrev(slidePrev -= 1);
        showNext(slideNext -= 1);

        $('.next').hide();
        $('.previous').hide();
    }

    function next() {
        showDivs(slideIndex += 1);

        showPrev(slidePrev += 1);
        showNext(slideNext += 1);

        $('.next').hide();
        $('.previous').hide();
    }

    // Previous event
    $('#prev').click(function () {
        previous();
    });

    $('#prev').hover(function(){
        $(showPrev(slidePrev)).show();
    },function () {
        $('.previous').hide();
    });

    //Next event

    $('#next').click(function () {
        next();
    });

    $('#next').hover(function(){
        $(showNext(slideNext)).show();
    },function () {
        $('.next').hide();
    });

    //Click dot
    $('#1').click(function () {
        showDivs(slideIndex = 1);
    });

    $('#2').click(function () {
        showDivs(slideIndex = 2);
    });

    $('#3').click(function () {
        showDivs(slideIndex = 3);
    });

    $('#4').click(function () {
        showDivs(slideIndex = 4);
    });

    $('#5').click(function () {
        showDivs(slideIndex = 5);
    })


});
