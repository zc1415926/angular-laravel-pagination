<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Item;

class ItemsController extends Controller
{
    public function index()
    {
        $items = Item::paginate(10);
 
    	return $items;
    }
    
    public function angular()
    {
        return view('items');
    }
}