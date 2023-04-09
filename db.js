import mysql from "mysql2"


/*
export const db = mysql.createConnection({
  host:"us-cdbr-east-06.cleardb.net",
  user:"b8c0a727f0c1d0",
  password: "907030ad",
  database:"heroku_74986cfe09ef96a"
})
*/

var swmysql_config = {
  host:"us-cdbr-east-06.cleardb.net",
  //host:"localhost",
  user:"b8c0a727f0c1d0",
  //user: "root",
  password: "907030ad",
  //password: "Aptx4869",
  database:"heroku_74986cfe09ef96a"
  //database: "blog"
}

 
export const db = mysql.createConnection(swmysql_config)
    db.connect(function(err) {
        if(err) {
            //setTimeout('handleDisconnection()', 2000)
        }
    })
    db.on('error', function(err) {
        console.log('db error'+err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('db error执行重连:'+err.message) 
            
           //db = mysql.createConnection(swmysql_config)
			
        } else {
            throw err
        }
    })
	setInterval(function () {
    db.query('SELECT 1');
    //console.log("数据库准备完成")
   }, 5000);
    //return db//返回一个connection对象，用于调用它的其他方法
    //exports.db = db


