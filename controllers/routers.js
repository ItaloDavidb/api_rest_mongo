const express = require('express')
const router = express.Router()
const Model = require('../models/Project')
//Contador de itens
const count = Model.countDocuments({}, function(err, counts) {
    if (err) { return handleError(err) } //handle possible errors
    console.log(`number of items:'${counts}'`)
})
//-----------------------------------All the Routes------------------------------------------------
//Inserindo itens na DB
router.post('/project', async (req,res) =>{
    const data = req.body
    try{ 
        const Data = await Model.create(data)
        res.status(201)
        res.send(
            JSON.stringify("THERE IS THE ID: " + Data._id+" OF THIS POST YOU CAN GO ON GET ROUTE TO SEE, YOU ONLY HAVE TO PUT THIS ID ON THE URL ABOVE")
        )

    }catch(err){
        res.status(400).json("YOU FORGOT SOME FIELD, ALL FIELDS ARE REQUIRED")
    }
})
//Lendo itens na DB
router.get('/project', async(req,res)=>{

    try{
        const data = await Model.find()
        res.status(200).json(data)
        
    }catch(err){
        console.log(err)
        res.status(500)
         
    }
})
//Lendo itens por ID na DB
router.get('/project/:id', async (req,res)=>{
    const id = req.params.id
    try{    
        const data = await Model.findOne({_id:id})
        if(data === null){
            return res.status(404).send({error: "ID Not Found"})
        }else{
            res.status(200).json(data)
        }
        
    }catch(err){
        res.status(404).json("ID INCORRECT")
    }
})
//Atualização de item
router.put('/project/:id', async (req,res)=>{
    const id = req.params.id
    const {title,description,task} = req.body
    const Data = {
        title,
        description,
        task
    }
    try{ 
        const data = await Model.findOne({_id:id})
        if(data === null){
            return res.status(404).send({error: "ID Not Found"})
        }else{   
        await Model.updateOne({_id:id},Data)
        res.status(200).json(Data)}
    }catch(err){
        res.status(404).json("ID INCORRECT")
    }
})
//Deletar item
router.delete('/project/:id', async (req,res) =>{
    const id = req.params.id
    try{
        const data = await Model.findOne({_id:id})
        if(data === null){
            return res.status(404).send({error: "ID Not Found"})
        }else{
        await Model.deleteOne({_id:id})
        res.status(204).end()}
    }catch(err){
        res.status(404).json("ID INCORRECT")
    }

})








module.exports = app => app.use('/api',router)