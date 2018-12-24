<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

// ========================================================
// 引入PDO來建立空白資料庫
// 畢竟目前laravel的migration沒辦法建立空白的schema... ...
// ========================================================

use PDO;
use PDOException;
class CreateDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:new';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $parameters = array(
            "host" => array(
                "value" => env("DB_HOST"),
                "error" => "來源（host）設定為空"
            ),
            "port" => array(
                "value" => env("DB_PORT"),
                "error" => "連線埠（port）設定為空"
            ),
            "database" => array(
                "value" => env("DB_DATABASE"),
                "error" => "名稱（database）設定為空"
            ),
            "username" => array(
                "value" => env("DB_USERNAME"),
                "error" => "使用者（username）設定為空"
            ),
            "password" => array(
                "value" => env("DB_PASSWORD"),
                "error" => "密碼（password）設定為空"
            ),
            "charset" => array(
                "value" => env("DB_CHARSET"),
                "error" => "字元集（charset）設定為空"
            ),
            "collation" => array(
                "value" => env("DB_COLLATION"),
                "error" => "編碼（collation）設定為空"
            )
        );

        foreach($parameters as $parameter)
        {
            if(empty($parameter["value"]))
            {
                $this->info("資料庫建立失敗：{$parameter["error"]}");
                return false;
            }
        }

        try 
        {
            $pdo = $this->getPDOConnection(
                $parameters["host"]["value"], 
                $parameters["port"]["value"], 
                $parameters["username"]["value"], 
                $parameters["password"]["value"]
            );

            $pdo->exec(sprintf(
                'CREATE DATABASE IF NOT EXISTS %s CHARACTER SET %s COLLATE %s;',
                $parameters["database"]["value"],
                $parameters["charset"]["value"],
                $parameters["collation"]["value"]
            ));

            $this->info("資料庫建立成功！");
        } 
        catch (PDOException $exception) 
        {
            $this->error("資料庫建立失敗：{ $exception->getMessage() }");
        }
    }

    private function getPDOConnection($host, $port, $username, $password)
    {
        return new PDO(sprintf('mysql:host=%s;port=%d;', $host, $port), $username, $password);
    }
}
