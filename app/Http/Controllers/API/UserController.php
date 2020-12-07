<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function create(Request $request)
    {

        try {

            $insert['name'] = $request['name'];
            $insert['lastname'] = $request['lastname'];
            $insert['phone'] = $request['phone'];
            $insert['adress'] = $request['adress'];
            $insert['email'] = $request['email'];

            User::insert($insert);

            $response['message'] = "Save succesful";
            $response['succes'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['succes'] = true;
        }

        return $response;
    }

    public function list(){

        try {
  
          $data = User::get();
          $response['data'] = $data;
          $response['success'] = true;
  
        } catch (\Exception $e) {
          $response['message'] = $e->getMessage();
          $response['success'] = false;
        }
        return $response;
  
      }
}
