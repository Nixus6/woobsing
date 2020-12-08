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

    public function list()
    {

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
    public function get($id)
    {

        try {

            $data = User::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Load successful";
                $response['success'] = true;
            } else {
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
    public function update(Request $request, $id)
    {

        try {
            $data['name'] = $request['name'];
            $data['lastname'] = $request['lastname'];
            $data['phone'] = $request['phone'];
            $data['adress'] = $request['adress'];
            $data['email'] = $request['email'];


            User::where("id", $id)->update($data);

            $response['message'] = "Updated successful";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
    public function delete($id)
    {

        try {
            $res = User::where("id", $id)->delete();
            $response['res'] = $res;
            $response['message'] = "Deleted successful";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
