<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Jquery Exam</title>

    <link rel="stylesheet" href="{{asset('css/style.css')}}"/>
    <link rel="stylesheet" href="{{asset('font/fontawesome-free-5.9.0-web/css/all.css')}}"/>
    <link rel="stylesheet" href="{{asset('js/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css')}}"/>

</head>
<body>
<div class="owl-carousel owl-theme">
    <div class="owl-slide d-flex align-items-center cover" style="background-image: url({{ asset('images/img_lights.jpg') }});">
        <div class="container">
            <div class="row justify-content-center justify-content-md-start">
                <div class="col-10 col-md-6 static">
                    <div class="owl-slide-text">
                        <h2 class="owl-slide-animated owl-slide-title">
                            <!-- content here -->

                            aaaa
                        </h2>
                        <div class="owl-slide-animated owl-slide-subtitle mb-3">
                            <!-- content here -->
                            bbb
                        </div>
                        <a class="btn btn-primary owl-slide-animated owl-slide-cta" href="" role="button">
                            <!-- content here -->
                        </a>
                    </div><!-- /owl-slide-text -->
                </div>
            </div>
        </div>
    </div><!-- /slide1 -->

    <!-- two more slides here -->
    <div class="owl-slide d-flex align-items-center cover" style="background-image: url({{ asset('images/img_mountains.jpg') }});">
        <div class="container">
            <div class="row justify-content-center justify-content-md-start">
                <div class="col-10 col-md-6 static">
                    <div class="owl-slide-text">
                        <h2 class="owl-slide-animated owl-slide-title">
                            <!-- content here -->
                        </h2>
                        <div class="owl-slide-animated owl-slide-subtitle mb-3">
                            <!-- content here -->
                        </div>
                        <a class="btn btn-primary owl-slide-animated owl-slide-cta" href="" role="button">
                            <!-- content here -->
                        </a>
                    </div><!-- /owl-slide-text -->
                </div>
            </div>
        </div>
    </div>

</div>
<!-- other sections here -->


<script src = "{{asset('js/jquery.min/jquery-1.10.2.js')}}"></script>
<script src="{{asset('js/jquery.min/jquery.min.js')}}"></script>

<script src="{{asset('js/OwlCarousel2-2.3.4/dist/owl.carousel.js')}}"></script>
<script src="{{asset('js/jquery.js')}}"></script>
</body>
</html>
