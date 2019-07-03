function Slider(container, nav) {
    this.container = container;
    this.nav = nav.show();

    this.imgs = this.container.find('img');
    this.imgWidth = this.imgs[0].width;
    this.imgsLen = this.imgs.length;

    this.current = 0;

    this.events.click.call(this);
}

Slider.prototype.transition = function() {
    this.container.animate({
        'margin-left': -(this.current * this.imgWidth)
    });
};

Slider.prototype.setCurrent = function( dir ) {
    var pos = this.current;
// if direction == next then pos++ else pos--
    pos += (dir === 'next' ? 1 : -1);
// reset current if pos < 0, 0 is start position
    this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen;

    return pos;
};

Slider.prototype.events = {
    click: function() {
        var self = this;

        self.nav.find('i').on('click', function(){
            self.setCurrent( $(this).data('dir') );
            self.transition();
        });

        self.nav.find(".next").on('click',function () {
            self.suggestNext();
            self.dotCurrent();
        });

        self.nav.find(".prev").on('click',function () {
            self.suggestPrev();
            self.dotCurrent();
        });

        self.nav.find(".next").hover(function () {
            $(".nextImage").show();
        },function () {
            $(".item").hide();
        });

        self.nav.find(".prev").hover(function () {
            $(".prevImage").show();
        },function () {
            $(".item").hide();
        });
    }
};

Slider.prototype.suggest = function() {
    var pos = this.current;

    var next = $("li:nth-child("+  (pos + 1) +")").find("img");
    var prev = $("li:nth-child("+  (pos - 1) +")").find("img");

    $(".suggest").children(".nextImage").append(next.clone());
    $(".suggest").children(".prevImage").append(prev.clone());
};

Slider.prototype.suggestNext = function () {
    $(".suggest").children(".item").empty();

    var post = parseInt(this.current);

    post += 2;

    var next = $("li:nth-child("+  post +")").find("img");
    var prev = $("li:nth-child("+  (post - 2) +")").find("img");

    $(".suggest").children(".nextImage").append( next.clone() );
    $(".suggest").children(".prevImage").append( prev.clone() )

    $(".suggest").children(".item").hide();
};

Slider.prototype.suggestPrev = function () {
    $(".suggest").children(".item").empty();

    var post = parseInt(this.current);

    var prev = $("li:nth-child("+  post +")").find("img");
    var next = $("li:nth-child("+  (post + 2) +")").find("img");


    console.log(post);

    $(".suggest").children(".prevImage").append( prev.clone() );
    $(".suggest").children(".nextImage").append( next.clone() );


    $(".suggest").children(".item") .hide();
};


Slider.prototype.dotCurrent = function () {
    $(".dot").removeClass("active");

    var pos = this.current;

    pos += 1;

    $(".dots").children("#"+pos).addClass(" active")
};

Slider.prototype.dotClick = function (id) {
    var pos = this.current;

    if(id > pos) {
        pos += parseInt(id);
    }

    else if (id <pos) {
        pos -= parseInt(id);
    }


    this.current = (pos < 0) ? this.imgsLen - 1 : pos % this.imgsLen;

    console.log(this.current);

    return pos;
}