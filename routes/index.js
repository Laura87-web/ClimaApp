const express = require("express")
const route = express.Router()

route.get("/",function(req,res){
    res.render("index.ejs")
   
})
route.get("/home", (req, res)=>{    
    res.render("home.ejs")  
    
})
route.get("*", (req, res)=>{
    res.status(404).send("<h1>LA PAGINA NO EXISTE</h1>")
})

module.exports = route