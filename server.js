const express=require('express')
const port=2000;
const app=express();
app.get('/',function(req,res){
    return res.json({
        naam:'daksh'
    })
})
app.listen(port,function(err){
    console.log(`listening on port ${port}`)
})