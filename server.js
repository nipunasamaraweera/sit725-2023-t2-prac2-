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

app.post('addTwoNumbers',(req,res)=>{
    let statusCode
}
)
app.listen(port,()=>{
console.log("App listening to: "+port)
})
