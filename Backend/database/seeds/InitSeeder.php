<?php

use Illuminate\Database\Seeder;

class InitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->insert(['title' => '資訊組', 'created_at' => now()]);
        DB::table('departments')->insert(['title' => '招生組', 'created_at' => now()]);
        DB::table('departments')->insert(['title' => '學服組', 'created_at' => now()]);

        DB::table('roles')->insert(['name' => '系統管理員', 'created_at' => now()]);
        DB::table('roles')->insert(['name' => '帳號管理模組', 'created_at' => now()]);
        DB::table('roles')->insert(['name' => '課程管理模組', 'created_at' => now()]);
        DB::table('roles')->insert(['name' => '師資管理模組', 'created_at' => now()]);
        DB::table('roles')->insert(['name' => '學員管理模組', 'created_at' => now()]);

        DB::table('users')->insert([
            'name' => '哆啦ａ夢',
            'email' => 'account1@ntnu.edu.tw',
            'department_id' => 1,
            'roles' => '["1"]',
            'account' => 'account1', 
            'password' => bcrypt('password1'),
            'created_at' => now()
        ]);

        DB::table('users')->insert([
            'name' => '工藤新一',
            'email' => 'account2@ntnu.edu.tw',
            'department_id' => 2,
            'roles' => '["3","4","5"]',
            'account' => 'account2', 
            'password' => bcrypt('password2'),
            'created_at' => now()
        ]);
    }
}
