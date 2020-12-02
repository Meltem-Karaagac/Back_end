let express = require('express')

const path = require("path")

const os=require('os');

console.log(os.platform());

let app=express();
const port=5455;
const host="http://localhost";

let bodyParser = require('body-parser')

let urlEncodedParser = bodyParser.urlencoded({extended:false})
const customPath = path.join(__dirname,"/testFolder")

console.log("customPath : ",customPath);

app.get('/',function(req,res) {
    res.send('Hello from Express')
    
})
app.get('/admin',function(req,res) {
    res.send('Hello admin')
    
})

app.get('/product',function(req,res) {
    console.log('ID : ' + req.query.id);
    console.log('CategoryID : ' + req.query.categoryid);
    res.send('Hello Product')
    
})

app.post("/product",urlEncodedParser,function (req,res) {
    console.log(req.body.name);
   res.send("post istegi alindi") 
    
})

app.delete("/product",function (req,res) {
    res.send("Delete istegi alindi") 
     
 })

 app.put("/product",function (req,res) {
    res.send("Put istegi alindi") 
     
 })
 app.get('/customer*',function(req,res) {
    res.send('Musteriler listelendi')
    
})

let server = app.listen(port,()=>{
    console.log(`I'm listening on ${host}:${port}` );
})

