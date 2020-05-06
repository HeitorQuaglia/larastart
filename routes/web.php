<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('{path}', 'HomeController@index')->where('path', '([A-z\d-\/_.]+?)');
