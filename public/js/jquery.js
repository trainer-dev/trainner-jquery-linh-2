jQuery(document).ready(function ($) {
    // creating a container variable to hold the 'UL' elements. It uses method chaining.
    var container=$('div.slider')
        .css('overflow','hidden')
        .children('ul');
    /*
    On the event of mouse-hover,
        i) Change the visibility of Button Controls.
    */
    $('.gallery').hover(function( e ){
        $('#slider-nav').show();
        return e.type=='mouseenter';
    });

    //DOT first
    $('.dot:first').addClass(" active");

    // Creating the 'slider' instance which will set initial parameters for the Slider.
    var sliderobj= new slider(container,$('#slider-nav'));

    /*
    This will trigger the 'setCurrentPos' and 'transition' methods on click of any button
     "data-dir" attribute associated with the button will determine the direction of sliding.
    */
    sliderobj.nav.find('i').on('click', function(){
        sliderobj.setCurrentPos($(this).data('dir'));
        sliderobj.transition();
        $(".dot").removeClass("active");
        dots();
    });

    /*
    Dot click
     */
    $(".dot").click(function () {
        var id =  $(this).attr('id');

        var range = (id-1) * (-600);


        sliderobj.move();

        console.log(range);
    });


    var next = $("li:nth-child(2)").find("img").clone();
    $(".nextImage").html(next);
    var prev = $("li:last").find("img").clone();
    $(".prevImage").html(prev);

    $(".item").hide();

    $('.prev').click(function () {
        $(".item").empty();
        showPrev();

        $(".item").hide();
    })

    $('.next').click(function () {
        $(".item").empty();
        showNext();

        $(".item").hide();
    });

    $(".prev").hover(function () {
        $(".item").hide();
        $(".prevImage").show();
    }, function () {
        $(".prevImage").hide();
    })

    $(".next").hover(function () {
        $(".item").hide;
        $(".nextImage").show();
    }, function () {
        $(".nextImage").hide();
    })

});
/*
This method will initialize each slider instance.
*/
function slider(container, nav){
    this.container=container;
    this.nav=nav.hide(); // This will assign 'nav' from parameters to 'nav' of current slider instance. It uses method chaining.
    this.imgs=this.container.find('.slides'); // Returns jQuery object containing all matched elements.

    this.width=this.imgs[0].width;

    this.imgLen=this.imgs.length; // Returns the total number of sliding elements.
    /* 	Initialize the "current" counter.
        This counter keeps track of the index of current slide in the unordered list of elements.
        This will be used for calculating the required displacement.
    */
    this.current=0; // Initialize the "current" counter.
}

// This method will apply the needed animation and displacement.
slider.prototype.transition=function(coords){
    this.container.animate({
        'margin-left': coords || -(this.current*this.width) // First element is multiplied by Zero.
    },500);

};

slider.prototype.move=function(coords) {
    this.container.animate({
        'margin-left': coords || -((id - 1) * (-600)) // First element is multiplied by Zero.
    }, 500);
};

// This method will set the "current" counter to next position.
slider.prototype.setCurrentPos=function(dir){
    var pos=this.current;

    // It'll check which button is pressed and accordingly increments or decrements the 'pos' variable.
    pos+= ~~(dir=='next') || -1; // You can use alternate "Math.floor()" method instead of double tilde (~~) operator.
    this.current=(pos<0)?this.imgLen-1: pos%(this.imgLen);


};

function showPrev() {
    $(".prevImage").empty();

    var css = parseInt($('ul').css('margin-left'));
    var numb = css / (-600);

    var prev = $("li:nth-child(" + (numb+1) + ")").prev().find('img').clone();

    console.log(prev);

    $(".prevImage").html(prev)
}

//show next

function showNext() {
    $(".nextImage").empty();

    var css = parseInt($('.gallery ul:first').css('margin-left'));
    var numb = css / (-600);
    if (numb > 3)
        var next = $("li:first").find('img').clone();
    else
        next = $("li:nth-child(" + (numb+1) + ")").next().next().find('img').clone();

    console.log(next);
    $(".nextImage").html(next)
}

/*
   Dot color
    */
function dots() {
    $(".dot").removeClass(" active");

    var css = parseInt($('ul').css('margin-left'));
    var num = css / (-600);

    if(num>=4){
        $(".dot:first").addClass(" active");
    }
    else {
        $(".dot:nth-child("+ (num+2) +")").addClass(" active");
    }
}

