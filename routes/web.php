<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/user', function () {
    return view('user');
});

Route::get('/user', 'App\Http\Controllers\UserController@index');
Route::get('/user/index', 'App\Http\Controllers\UserController@index');
Route::get('/user/list', 'App\Http\Controllers\UserController@index');
Route::get('/user/form', 'App\Http\Controllers\UserController@index');
Route::get('/user/edit/{num}', 'App\Http\Controllers\UserController@index');
Route::put('/user/update/{id}', 'App\Http\Controllers\API\UserController@update');
