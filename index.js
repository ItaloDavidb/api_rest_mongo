// Config inicial
const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')
//Middleware
app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())
//Rotas
require('./controllers/routers')(app)
//Conexão para a DB
mongoose
    .connect(
        config.get('api.path')
        //You can go to Config then in default then switch the path to the path of your DB
    )
    .then(()=>{
        console.log('CONNECTED TO DB')
        app.listen(config.get('api.port'), () => console.log('API ON'))
        //Listen the Port you also can go to Config then in default to switch
    })
    .catch((err) => console.log(err))




