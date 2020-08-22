const express =require("express")

//引入各种路由
const UserRouter = require('./routes/user')

const app = express()

//静态资源托管
app.use(express.static("public"))


//req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}));

//调用路由中间件
app.use("/api",UserRouter)

app.listen(3000);