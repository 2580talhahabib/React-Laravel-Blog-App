<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index(){
        $blogs=Blog::latest('id')->get();
        return response()->json([
            'status'=>true,
            'blogs'=>$blogs
        ]);
    }
    public function create(){
        
    }
    public function store(Request $req){
     $validator=Validator::make($req->all(),
     [
        'title'=>'required',
        'Auther'=>'required',
        'description'=>'nullable'
     ]);
     $path ='';
     if($validator->passes()){
        if(!empty($req->file('image'))){
            if($req->hasFile('image')){
            $image=$req->file('image');
            $ext=$image->getClientOriginalExtension();
            $path=time().'.'.$ext;
            $image->move(public_path('/storage/product/'),$path);

        }
        }
        
        Blog::create([
            'title'=>$req->title,
            'short_desc'=>$req->short_desc,
            'description'=>$req->description,
            'image'=>$path,
            'Auther'=>$req->Auther,
            
        ]);
        return response()->json([
            'status'=>true,
            'message'=>'Blog created successfully',
        ]);
        
     }else{
        
        return response()->json([
            'status'=>false,
            'message'=>'Blog May Have error',
            'errors'=>$validator->errors(),
        ]);
     };
}
public function show($id){
    $blog=Blog::find($id);
    if($blog == null){
        return response()->json([
            'status'=>false,
            'message'=>'Blog not found',
        ]);
    }else{
        return response()->json([
            'status'=>true,
            'data'=>$blog,
        ]);
    }
}
public function update($id,Request $req){
    $blog=Blog::find($id);
    if($blog == null){
        return response()->json([
            'status' =>false,
            'message'=>'Blog did not found'
        ]);
    }
    $validator=Validator::make($req->all(),
    [
       'title'=>'required',
       'Auther'=>'required',
    ]);
    $path ='';
    if($validator->passes()){
       if(!empty($req->file('image'))){
           if($req->hasFile('image')){
           $image=$req->file('image');
           $ext=$image->getClientOriginalExtension();
           $path=time().'.'.$ext;
           $image->move(public_path('/storage/product/'),$path);

       }
       }
       
       $blog->update([
           'title'=>$req->title,
           'short_desc'=>$req->short_desc,
           'description'=>$req->description,
           'image'=>$path,
           'Auther'=>$req->Auther,
           
       ]);
       return response()->json([
           'status'=>true,
           'message'=>'Blog Updated successfully',
       ]);
       
    }else{
       
       return response()->json([
           'status'=>false,
           'message'=>'Blog May Have error',
           'errors'=>$validator->errors(),
       ]);
    };
}
}