<?php

use Illuminate\Http\Request;

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
Route::group([
    /*
     * 先不做驗證
     * 'middleware' => 'auth:api',
     */
    'middleware' => 'cors'
], function ($router) {
    Route::resource('course',   'CourseController');
    Route::resource('student',  'StudentController');
    Route::resource('teacher',  'teacherController');
    Route::resource('user',     'UserController');
});