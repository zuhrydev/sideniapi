var mysql = require("mysql");
const express = require("express");
var conn = mysql.createConnection({
	host: "127.0.0.1",
	port : 80,
	user: "root",
	password: "",
	database: "sideni",
	
	

});
conn.connect(function(err){
	if(err) throw err
	//   console.log('Error connecting to Db');
	//   return;
	// }
	// console.log('Connection established');
  });


