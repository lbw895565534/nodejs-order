var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200', msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};
// 用户名密码登录 
router.get('/findUser', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(userSQL.findUser, [param.username, param.password], function (err, result) {
      if (result) {
        console.log(result)
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);

      // 释放连接  
      connection.release();
    });
  });
});
// 添加用户
router.get('/insertUser', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(userSQL.insert, [param.id, param.name, param.passsword], function (err, result) {
      if (result) {
        result = {
          code: 200,
          msg: '增加成功'
        };
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);

      // 释放连接  
      connection.release();

    });
  });
});

// 修改餐次
router.get('/alterMeal', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
      connection.query(userSQL.alterMeal, [param.breakfast, param.lunch, param.dinner, param.nightsnack, param.uid, param.date], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '修改成功'
          };
        }   
        responseJSON(res, result); 
        connection.release();
      });
  });
});

// 添加餐次
router.get('/insertMeal', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    console.log(param)
      connection.query(userSQL.insertMeal, [param.uid, param.date, param.breakfast, param.lunch, param.dinner, param.nightsnack, ], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '添加成功'
          };
        }   
        responseJSON(res, result); 
        connection.release();
      });
  });
});


// 显示所有记录 
router.get('/findRecordById', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(userSQL.findRecordById, [param.uid], function (err, result) {
      if (result) {
        console.log(result)
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);

      // 释放连接  
      connection.release();
    });
  });
});

// 显示查询日期的记录 
router.get('/findRecordByDate', function (req, res, next) {
  // 从连接池获取连接 
  pool.getConnection(function (err, connection) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // 获取前台页面传过来的参数  
    var param = req.query || req.params;
    // 建立连接 增加一个用户信息 
    connection.query(userSQL.findRecordByDate, [param.uid , param.date], function (err, result) {
      if (result) {
        console.log(result)
      }

      // 以json形式，把操作结果返回给前台页面     
      responseJSON(res, result);

      // 释放连接  
      connection.release();
    });
  });
});

module.exports = router;