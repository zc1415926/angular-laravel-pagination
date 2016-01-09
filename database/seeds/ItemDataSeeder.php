<?php

use Illuminate\Database\Seeder;

use App\Item;

class ItemDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->delete();
 
		for ($i = 1; $i <= 100; $i++) {
			Item::create(array('title' => 'item test ' . $i));
		}
    }
}
