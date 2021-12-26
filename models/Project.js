const mongoose = require('mongoose')
//Modelo
//Todos os campos

const Project = mongoose.model('Project',{
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdAt:{type:Date,default:Date.now
    },
    updatedAt:{type:Date,default:Date.now
    },  
    
    task : [{
        title : { type:String,required:true},
        taskRelevance :{ type:Number,required:true},
        completed :{ type:Boolean,required:true},
        createdAt:{type:Date,default:Date.now
        },
        updatedAt:{type:Date,default:Date.now
        },
        _id:false

        
                
         },] 


},
)
module.exports = Project