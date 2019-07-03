<?php


namespace App\Http\Controllers;

use App\User;

class JqueryController extends Controller
{
    public function index() {
        $user = User::latest()->take(5)->get();
        return view("jquery.jquery",array('model'=>$user));
    }

    public function exam() {
        $user = User::latest()->take(5)->get();
        return view('jquery.index',array('model'=>$user));
    }

    public function demo() {
        $user = User::latest()->take(5)->get();
        return view('demo',array('model'=>$user));
    }
}