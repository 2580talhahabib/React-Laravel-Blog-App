<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function index(Request $req){
        $blogs=Blog::latest('id');

        if(!empty($req->keyword)){
            $blogs=$blogs->where('title','like','%'.$req->keyword.'%');
        }
       $blogs= $blogs->get();

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
public function Destroy($id){
  $delete=Blog::find($id);
  if($delete == null){
    return response()->json([
        'status'=>false,
        'message'=>'Blog did not found'
    ]);
  }
  if($delete){
    $filepath = public_path('storage/product/' . $delete->image);
    // dd($filepath);

    if($delete->image && file_exists($filepath)){
        unlink($filepath);
    }
    $delete->delete();
    return response()->json([
        'status'=>true,
        'message'=>'Image deleted successfully'
    ]);
}
}
}