import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'


const app = express()
const PORT = process.env.PORT || 4000

// bodyparser setup
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

//mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


routes(app);


app.get('/',(req,res)=>{
    res.send("Node and express running on post " + PORT)
})

app.listen(PORT,()=>{console.log("Your server is running on http://localhost:"+ PORT )})