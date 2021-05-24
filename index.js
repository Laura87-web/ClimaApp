require("colors")
const morgan = require("morgan")
const express = require("express")
const app = express()
const PORT = 3000

app.use(morgan("dev"))

app.get("/",function(req,res){
    res.status(200).send("<h1>Hola, esta es la AppClima</h1>")
})
app.get("/home", (req, res)=>{    
    res.status(200).send("<h1>ESTAS EN HOME</h1>")  
    
})
app.get("*", (req, res)=>{
    res.status(404).send("<h1>LA PAGINA NO EXISTE</h1>")
})
app.listen(PORT, ()=>{
    console.log(`Server listen in port ${PORT}`.magenta.bold)
})