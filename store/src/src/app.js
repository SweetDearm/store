const express = require("express");
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "",
        port: 3306,
        database: "acc",
        connectionLimit: 15
    })
    //3:创建express对象
var server = express();
//4.指定静态资源目录
server.use(express.static("public"));
//5:处理跨域请求
const cors = require("cors");
server.use(cors({
    origin: ["http://127.0.0.1:8081",
        "http://localhost:8080",

    ],
    credentials: true
}));
//6:添加session功能
const session = require("express-session");
server.use(session({
    secret: "128位字符串",
    resave: true,
    saveUninitialized: true
}));
//9:绑定监听端口
server.listen(3000);

/*轮播*/
server.get("/headers", (req, res) => {
    var obj = {};
    var sql = `select id,title,img from carousel`;
    pool.query(sql, (err, result) => {
        if (err) throw err;
        obj = result;
        res.send(obj);
    })
});
/*楼层商品*/
server.get("/middles", (req, res) => {
    var obj = {
        list1: [],
        list2: [],
        list3: [],
        list4: []
    };
    var sql = `SELECT * FROM ring WHERE classid = ? LIMIT 0,6 `;
    pool.query(sql, [1], (err, result) => {
        if (err) throw err;
        obj.list1 = result;
    })
    pool.query(sql, [2], (err, result) => {
        if (err) throw err;
        obj.list2 = result;
    })
    pool.query(sql, [3], (err, result) => {
        if (err) throw err;
        obj.list3 = result;
    })
    pool.query(sql, [4], (err, result) => {
        if (err) throw err;
        obj.list4 = result;
        res.send(obj);
    })
});
/*分页*/
server.get("/ring", (req, res) => {
        var obj = {
            list1: [],
            list2: []
        };
        var pno = req.query.pno; //页码
        var ps = req.query.pageSize; //页大小,一页几个
        // -设置默认值
        if (!pno) { pno = 1 };
        if (!ps) { ps = 15 };
        var obj = { code: 1, msg: "查询成功" };
        var off = (pno - 1) * ps;
        ps = parseInt(ps);
        var sql = `select id,title,classid,Price,PlaceImgUrl from ring  where classid =?  LIMIT ?,?`;
        pool.query(sql, [1, off, ps], (err, result) => {
            if (err) throw err;
            obj.list1 = result;
            var sql = "SELECT count(*) AS c FROM ring where classid=1"; //多少条数据
            pool.query(sql, (err, result) => {
                if (err) throw err;
                var pc = Math.ceil(result[0].c / ps);
                obj.pc = pc; //总页数
                obj.pagenumbe = result[0].c //总数据数
                res.send(obj)
            })
        });
        pool.query(sql, [2, off, ps], (err, result) => {
            if (err) throw err;
            obj.list2 = result;
            var sql = "SELECT count(*) AS cc FROM ring where classid=2"; //多少条数据
            pool.query(sql, (err, result) => {
                if (err) throw err;
                var pc1 = Math.ceil(result[0].cc / ps);
                obj.pc1 = pc1; //总页数
                obj.pagenumbe1 = result[0].cc //总数据数
            })
        });
    })
    /*详情页 */
server.get("/products", (req, res) => {
    var obj = {};
    var sql = 'select * from ring_details';
    pool.query(sql, (err, result) => {
        if (err) throw err;
        obj = result;
        res.send(obj);
    })
})

server.get("/cart", (req, res) => {
    //1:参数(无参数)app.js
    console.log(req.session.uid);
    var uid = req.session.uid;
    if (!uid) {
        res.send({ code: -1, msg: "请登录" });
        return;
    }
    //2:sql
    var sql = "SELECT id,img_url,title,price,count FROM acc_cart WHERE uid = ?";
    pool.query(sql, [uid], (err, result) => {
            if (err) throw err;
            res.send({ code: 1, data: result })
        })
        //3:json
})

//功能四:删除购物车中商品
server.get("/delItem", (req, res) => {
    //1:参数购物车id
    var id = req.query.id;
    //2:sql 删除指定数据
    var sql = "DELETE FROM acc_cart WHERE id = ?";
    //3:json
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        //affectedRows 操作影响行数
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" });
        } else {
            res.send({ code: -1, msg: "删除失败" })
        }
    })
});

//功能五:删除多个选中商品
server.get("/delAll", (req, res) => {
    //1:参数 1,2,3
    var ids = req.query.ids;
    //2:sql
    var sql = `DELETE FROM acc_cart WHERE id IN (${ids})`;
    //3:json
    pool.query(sql, (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({ code: 1, msg: "删除成功" });
        } else {
            res.send({ code: -1, msg: "删除失败" });
        }
    })
});

//接收用户登录请求
server.get("/login", (req, res) => {
        //1:参数
        var uname = req.query.uname;
        var upwd = req.query.upwd;
        //1.1:正则表达式验证用户名或密码
        //2:sql
        var sql = "SELECT id FROM acc_login WHERE uname = ?  AND upwd = ?";
        //3:json
        pool.query(sql, [uname, upwd], (err, result) => {
            if (err) throw err;
            if (result.length == 0) {
                res.send({ code: -1, msg: "用户名或密码有误" });
            } else {
                //result=[{id:1}]
                req.session.uid =
                    result[0].id;
                res.send({ code: 1, msg: "登录成功" });
            }
        })
    })
    //注册
server.get("/reg", (req, res) => {
    var uname = req.query.uname
    var upwd = req.query.upwd
    var uphone = req.query.uphone
    var uemail = req.query.uemail
        //    先去数据库中查询是否有该用户，如果有该用户，提示用户更换用户名
    var sql = "SELECT uname FROM acc_login "
    var arr = []
    pool.query(sql, (err, result) => {
        if (err) throw err
        for (var i = 0; i < result.length; i++) {
            arr.push(result[i].uname)
        }
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == uname) {
                res.send({
                    data: "用户名已存在",
                })
                return
            }
        }
    })

    var sql1 = "INSERT INTO acc_login (uname,upwd,uphone,uemail) VALUES (?,?,?,?)"
    pool.query(sql1, [uname, upwd, uphone, uemail], (err, result) => {
        if (err) throw err
        console.log(result.affectedRows)
        if (result.affectedRows > 0) {
            res.send({
                code: 1,
                data: "注册成功"
            })
        } else {
            res.send({
                code: -1,
                data: "注册失败"
            })
        }
    })
})
server.get("/search", (req, res) => {
    var obj = {
        resout: []
    }

    var sql = 'SELECT * FROM ring WHERE title LIKE ? ORDER BY id ASC'
    pool.query(sql, ['%%%'], (err, result) => {
        if (err) throw err
        obj.resout = result;
        res.send(obj);
    })

});