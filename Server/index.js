import express from "express"
import cors from "cors"
import db from "./db.js"
import bcrypt from "bcrypt"

const app = express()
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.post("/register", async (req, res)=>{
    let { login, password, email } = req.body
    try {
          let result = await db.query("SELECT * FROM user WHERE login=? OR email=?", [login, email])
          if (result[0].length > 0){
            res.status(400).json({error: "Tyt hapartachili vin"})
          }
          let hashedPassword = await bcrypt.hash(password, 10)
          await db.query("INSERT INTO user (login, password, email) VALUES (?, ?, ?)", [login, hashedPassword, email])
          res.status(201).json({message: "User is registered. idk man i forgot arabic"})
     }catch(error){
        console.log(error)
        res.status(500).json({error: "Tyt hapartachili mu"})
     }
})

app.get("/", async (req, res)=>{
    let result = await db.query("SHOW TABLES")
    res.end(JSON.stringify(result))
})


app.listen(3000, ()=>console.log("Server ON!"))