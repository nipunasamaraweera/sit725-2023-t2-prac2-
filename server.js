var express = require("express");
const res = require("express/lib/response");
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.render('index.html')
});

app.post('',(req,res)=>
{});

app.use('/addTwoNumbers', (req,res)=>{
    var n1= req.query.n1;
    var n2= req.query.n2;
    var result= addNumbers(n1,n2);
    res.json({statuscode:200,data:result,message:"Success"});
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})
