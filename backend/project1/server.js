import express from "express"
import path from "path"
import { dirname } from "node:path"

const app = express()

// const __dirname = dirname()

let port = 4000

app.use(express.json())

app.get("/", (req, res) => {
    // res.send("<div><h1>hello !</h1> <h2>welcome</h2></div>")
    // res.sendFile(path.join(__dirname, "index.html"))
    // res.sendFile("index.html")
    // res.render("index",{key:value})
    res.status(200).json({
        message: "welcome to our page !",
        "date": new Date().toTimeString(),
        data: [
            {
                name: "amey",
                phone: 9766696550
            },
            {
                name: "om",
                phone: 8857032120
            },
        ]
    })
})

app.post("/data", (req, res) => {
    // res.send("<div><h1>hello !</h1> <h2>welcome</h2></div>")
    // res.sendFile(path.join(__dirname, "index.html"))
    // res.sendFile("index.html")
    // res.render("index",{key:value})
    // res.status(200).json({
    //     message: "welcome to our page !",
    //     "date": new Date().toTimeString(),
    //     data: [
    //         {
    //             name: "amey",
    //             phone: 9766696550
    //         },
    //         {
    //             name: "om",
    //             phone: 8857032120
    //         },
    //     ]
    // })
    console.log(req.body)

    if (req.body.name) {
        res.status(202).json({
            message: `thank you ${req.body.name}`
        })
    } else {
        res.status(400).json({
            message: `name is required !`
        })
    }
})

app.get("/store",(req,res)=>{
    console.log(req.query)
    res.status(200).json({message: "you are looking for : "})
})

app.get("/store/:shoename",(req,res)=>{
    console.log(req.params)
    res.status(200).json({message: `you are looking for : ${req.params.shoename}`})
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})

// get post put patch delete 
// send (message), sendFile(html), render(),json

// query, params(body), headers

// form data -> req.body
// query -> req.query
// parameters -> req.params (path parameters)

// url -> https://www.domain.com/

// url -> https://www.domain.com/api-endpoint

// url -> https://www.yourshoes.shop/store?size=5&color=red&brand=nike (search/filter)

// https://www.amazon.in/s?k=headphone&crid=2MHYIQNYSC2GT&sprefix=headphone+%2Caps%2C361&ref=nb_sb_noss_2

// https://www.amazon.in/s?k=headphones&rh=p_90%3A6741118031&dc&crid=2MHYIQNYSC2GT&qid=1784564568&rnid=6741116031&sprefix=headphone+%2Caps%2C361&ref=sr_nr_p_90_1&ds=v1%3A6rj4O65pSnsTqLlZdC65pSaWg0tsYHR9ggXG%2Fwa7%2FUo

// https://www.amazon.in/s?k=headphones&rh=p_90%3A6741118031&dc=&crid=2MHYIQNYSC2GT&qid=1784564708&rnid=1318502031&sprefix=headphone+%2Caps%2C361&ref=sr_nr_p_36_0_0&low-price=&high-price=1050

// https://www.amazon.in/dp/B0FPRCRTRN/ref=sr_1_1_sspa?crid=2MHYIQNYSC2GT&dd=OQXX7zDcLZJaSOACvAW2zg%2C%2C&dib=eyJ2IjoiMSJ9.abk0O00zHBL63opZB_DfKxQIHSWseiew5JAfqqiVAI2Qyg7w13kmRtuSaJ9fdRpvY-grbMXqSQ5vXIcDQ6b0PVBVwm1tl0j7LurH_Xtbl8sXX6eKB-Nw23Hicula4ODzo7IFmfYJH2t9QOIrV_qjVOWpRQ8jSFNArI1Q0cV7HOQrVUmS_idQ495JqQpTnhiGkRU2VxX5PlVajYKef_NgzWh59b9AqtIThvLYbTwwO0g.DYDLHlbaM5Zn7usxRzWgdD27TAU-rDUM1Y_kvqvGINg&dib_tag=se&keywords=headphones&qid=1784564767&refinements=p_36%3A-105000%2Cp_90%3A6741118031&rnid=1318502031&sprefix=headphone%2B%2Caps%2C361&sr=8-1-spons&aref=iArQpw290H&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1