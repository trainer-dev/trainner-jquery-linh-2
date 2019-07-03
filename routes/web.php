<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/jquery','JqueryController@index')->name('jquery');
Route::get('/exam','JqueryController@exam')->name('exam');
Route::get('/demo','JqueryController@demo')->name('demo');

