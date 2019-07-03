<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset("css/app.css") }}">

    <link rel="stylesheet" href="{{ asset('font/fontawesome-free-5.9.0-web/css/all.css') }}"/>

    <link rel="stylesheet" href="{{ asset("css/demo.css") }}"/>
</head>
<body>
    <div class="gallery">
        <div class="slider">
            <ul>
                @foreach($model as $user)
                    <li><img src="{{ asset($user->avatar) }}" alt="{{ asset($user->name) }}" ></li>
                @endforeach
            </ul>
        </div>

        <div id="slider-nav">
            <i class="far fa-arrow-alt-circle-left fa-2x prev" data-dir="prev" ></i>
            <i class="far fa-arrow-alt-circle-right fa-2x next" data-dir="next"></i>
        </div>
    </div>

    <div class="suggest">
        <div class="prevImage item"></div>
        <div class="nextImage item"></div>
    </div>

    <!-- Navigation list of slider images -->
    <div class="dots">
        <span class="dot" id="1"></span>
        <span class="dot" id="2"></span>
        <span class="dot" id="3"></span>
        <span class="dot" id="4"></span>
        <span class="dot" id="5"></span>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="{{ asset('js/demo.js') }}"></script>
    <script>
        var slider = new Slider( $('.slider').find('ul'), $('#slider-nav') );
        slider.suggest();
        slider.dotCurrent();

        $(".dot").click(function () {
            var id = $(this).attr("id");

            slider.dotClick(id);
        });

        $(".item").hide();
    </script>

</body>
</html>
