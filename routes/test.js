// const mysql = require("mysql");
import mysql from "mysql2"

// 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost", // 数据库主机地址
  user: "root", // 数据库用户名
  password: "Aptx4869", // 数据库密码
  database: "blog", // 数据库名
});
// console.log("results");
// 执行 SQL 查询
connection.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
});

// 关闭数据库连接
connection.end();
