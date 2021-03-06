<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user/list', 'App\Http\Controllers\API\UserController@list');
Route::post('/user/create', 'App\Http\Controllers\API\UserController@create');
Route::get('/user/get/{id}', 'App\Http\Controllers\API\UserController@get');
Route::delete('/user/delete/{id}', 'App\Http\Controllers\API\UserController@delete');
