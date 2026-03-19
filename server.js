const express = require("express")
const app = express()
app.use(express.json())
app.use(express.static(__dirname))
app.post("/evaluate",(req,res)=>{

const answer = req.body.answer

let feedback = ""

if(answer.length < 20){

feedback = "Answer too short. Expand more."

}else{

feedback = "Decent attempt. Mention Starling forces components."

}

res.json({feedback:feedback})

})
app.use(express.static(__dirname))

app.get("/question",(req,res)=>{

const questions = [
"Explain the mechanism of action potential.",
"What are Starling forces?",
"What causes metabolic acidosis?"
]

const q = questions[Math.floor(Math.random()*questions.length)]

res.json({question:q})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})