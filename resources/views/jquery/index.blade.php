<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Jquery O2</title>

    <link rel="stylesheet" href="{{ asset('css/jquery.css') }}"/>
    <link rel="stylesheet" href="{{ asset('font/fontawesome-free-5.9.0-web/css/all.css') }}"/>

</head>
<body>
    <div class="slideshow">
        <ul>
            <li class="thumnail">
                @foreach($model as $user)
                        <img class="previous" src="{{ asset($user->avatar) }}" alt="{{ $user->name }}" style="width:100%; display: none">

                @endforeach
            </li>

            <li>
                <i class="far fa-arrow-alt-circle-left fa-3x" id="prev" ></i>
            </li>

            <li class="image">
                <div class="container">
                    @foreach($model as $user)
                        <img class="mySlides " src="{{ asset($user->avatar) }}" alt="{{ $user->name }}" style="width:100%; display: none">
                        <div class="text-block">
                            <h4>{{ $user->name }}</h4>
                            <p>{{ $user->email }}</p>
                        </div>
                    @endforeach
                </div>
            </li>

            <li>
                <i class="far fa-arrow-alt-circle-right fa-3x" id="next"></i>
            </li>

            <li class="thumnail">
                @foreach($model as $user)
                    <img class="next" src="{{ asset($user->avatar) }}" alt="{{ $user->name }}" style="width:100%; display: none">
                @endforeach
            </li>

        </ul>
    </div>

    <!-- Navigation list of slider images -->
    <div style="text-align:center">
        <span class="dot" id="1" data-id="1"></span>

        <span class="dot" id="2"></span>
        <span class="dot" id="3"></span>
        <span class="dot" id="4"></span>
        <span class="dot" id="5"></span>
    </div>

    <script src = "{{asset('js/jquery.min/jquery-1.10.2.js')}}"></script>
    <script src="{{asset('js/jquery.min/jquery.min.js')}}"></script>

    <script src="{{asset('js/jquery02.js')}}"></script>
</body>
</html>
