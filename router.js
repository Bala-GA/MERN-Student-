const { application } = require('express')
const express = require('express')
const router = express.Router()
const stuRouter = require('./stuSchema')

router.post('/',async(req,res) => {
    try{
        console.log(req.body)
        var data = await new stuRouter({
            FName:req.body.FName,
            LName:req.body.LName,
            Location:req.body.Location,
            Email:req.body.Email,
            Dob:req.body.Dob,
            Education:req.body.Education,
        })
        console.log(data)
        await data.save()
        res.json(data)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/',async(req,res) => {
    try{
        const getall = await stuRouter.find() 
        res.json(getall)
    
    }
    catch(err){
        console.log(err)
    }
})

router.get(`/:FName`,async(req,res) => {
    try{
        //const query = Character.find
        const getall = await stuRouter.find({FName:{$eq: req.params.FName}}) //
        res.json(getall)
    
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update',async(req,res) => {
    try{
        //console.log(req.body._id);
        var update = await stuRouter.update({_id:(req.body._id)},{$set:{
            FName:req.body.FName,
            LName:req.body.LName,
            Location:req.body.Location,
            Email:req.body.Email,
            Dob:req.body.Dob,
            Education:req.body.Education,
        }}) 
        res.json(update)
    }
    catch(err){
        console.log(err)
    }
})

router.delete('/delete/:id', async(req,res) => {
    try{
        var deldata = await stuRouter.findByIdAndDelete({_id:req.params.id}).then(e=>{
            res.json({message:"Deleted Successfully"})
        })
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router;