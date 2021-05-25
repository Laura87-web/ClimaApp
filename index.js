require("colors")
const PORT = 3000
const morgan = require("morgan")
const express = require("express")
const app = express()
const routes = require("./routes")

app.use(morgan("dev"))
app.use(routes)
app.set("appName", "ClimaApp")//setea como appName: "ClimaApp"
app.set("view engine", "ejs")

// console.log(__dirname + "/views")
// app.set("views", __dirname + "/views")


app.listen(PORT, ()=>{
    console.log(`Server listen in port ${PORT}`.magenta.bold)
    console.log(app.get("appName").magenta)
})