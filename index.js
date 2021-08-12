const dotenv = require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
const path = require("path")

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

// handles homepage
app.use("/api/*", (_,res)=>{
    res.json({data: 'The API is now working'})
}) 

// handles incorrect endpoints
app.use("*",(_,res)=>{ 
    res.sendFile(path.join(__dirname,"client/build","index.html"))
})


console.log("It's alive")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.GREET)
console.log(process.env.FOOD)