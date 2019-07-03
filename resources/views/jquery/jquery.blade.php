<!Doctype html>
<html>
<head>
    <title>Simple Slider</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('font/fontawesome-free-5.9.0-web/css/all.css') }}"/>

</head>
<body>
<!-- Container for Slider and Navigation Controls -->
<div class="gallery">
    <!-- The actual moving Slider -->
    <div class="slider">
        <ul>
            @foreach($model as $user)
                <li><img src="{{ asset($user->avatar) }}" class="slides" alt="{{ asset($user->name) }}" ></li>
            @endforeach
        </ul>
    </div>
    <!-- Navigation Button Controls -->

    <div id="slider-nav">
        <i class="far fa-arrow-alt-circle-left fa-2x prev" data-dir="prev" ></i>
        <i class="far fa-arrow-alt-circle-right fa-2x next" data-dir="next"></i>
    </div>

    <!-- Navigation list of slider images -->
    <div id="dots">
        <span class="dot" id="1" data-id="1"></span>
        <span class="dot" id="2"></span>
        <span class="dot" id="3"></span>
        <span class="dot" id="4"></span>
        <span class="dot" id="5"></span>
    </div>

    <div id="thumbnail">
        <div class="prevImage item">
        </div>
        <div class="nextImage item">
        </div>
    </div>

</div>


{{--<!-- Loading JavaScript Codes. -->--}}
<script src = "{{asset('js/jquery.min/jquery-1.10.2.js')}}"></script>
<script src="{{ asset('js/jquery.js') }}"></script>
</body>
</html>
