const express = require("express");
const UserModel = require("../models/user");
const router = express.Router();
const bcryptjs = require("bcryptjs")


router.post("/sign-up",async(req,res)=>{
    //1.获取前端传递过来的数据
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    //2.效验参数是否ok

    //3.判断是否可以注册，邮箱是唯一的。
    let data = await UserModel.findOne({ email:email })
    if(data){
        res.send({
            code:-1,
            msg:"邮箱已被注册"
        })
        return
    }

    //4.保存到数据库
    let user = new UserModel({
        username:username,
        password:bcryptjs.hashSync(password,10),
        email:email,
    })
    await user.save();
    res.send({
        code:0,
        msg:"注册成功"
    })

})

router.post("/sign-in",(req,res)=>{
    res.send("登录")
})

module.exports = router;