var connection = require('../config/database');
var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config =require('../config/secret');

//controller registrasi
exports.registrasi = function(req, res){
    console.log("tes");
    // var post = {
    //     nik: req.body.nik,
    //     nama : req.body.nama,
    //     username : req.body.username,
    //     password : bcrypt(req.body.password)
    // }
    
    // var query = "INSERT INTO ? SET ?";
    // var table = ["user"];
    // query = mysql.format(query, table);
    // connection.query(query,post, function(error, rows) {
    //     if(error){
    //         console.log(error);
    //     }
    // })
}   

//controller login
// exports.login = function(req, res) {

//     var post = {
//         username : req.body.username,
//         password : req.body.password
        
//     }
//     var query = "SELECT * FROM ?? WHERE  ??=?";
//     var table = ["user", "email", post.username];
//     query = mysql.format(query, table); 
//     connection.query(query, function(error, rows){

//         if(error){
//             console.log(error);
//         }
//         else{
//             if(rows.length == 1){
//                 var cekPass =  bcrypt.compareSync(req.body.password,rows[0].password);
//                 if(cekPass==true){
//                     var token = jwt.sign({rows}, config.secret, {
//                         expiresIn: 1440
//                     });
//                     nama = rows[0].nama;
//                     email = rows[0].email;
//                     unit = rows[0].unit;
//                     level = rows[0].level;
//                     var dateTime = require('node-datetime');
//                     var dt = dateTime.create();
//                     var formatted = dt.format('Y-m-d H:M:S');
//                     var data = {
//                         nama : nama,
//                         email : email,
//                         access_token : token,
//                         unit : unit,
//                         level : level,
//                         createdAdd : formatted
//                     }
//                     var query = "INSERT INTO ?? SET ?";
//                     var table = ["akses_token"];
//                     query = mysql.format(query, table);
//                     connection.query(query, data, function(error, rows){
//                         if(error){
//                             console.log(error);
//                         }
//                         else {
//                             res.json({
//                                 success : true,
//                                 message: 'Sukses Generate Token',
//                                 token : token,
//                                 level : data.level,
//                                 nama : data.nama,
//                                 unit : data.unit,
//                             })
//                         }
//                     });
//                 }else{
//                     res.json({"Error" :true, "Message":"Username atau password salah !"});
//                 }
//             }
//         }
               
//     })
// }

exports.halamanrahasia = function(req, res){
    response.ok("Halaman ini hanya untuk halaman rahasia",res);
}