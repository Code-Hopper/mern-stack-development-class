import express from "express"

const app = express()

let port = 4000

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port} !`)
})

// get post put patch delete 
// send, sendFile, render,json