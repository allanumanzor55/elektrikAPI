const express = require("express");
const router = express.Router();
const userSchema = require("../models/users");

//add users
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

router.get("/users",(req,res)=>{
  userSchema
  .find()
  .then((data)=>res.json(data))
  .catch((error)=>console.error(error))
})

router.post("/users/login",(req,res)=>{
  const {userName,password} = req.body
  userSchema
  .find({"userName":userName,"password":password})
  .then((data)=>{
    console.log(data);
    if(data.length>0){
      res.json({"result":true,data})
    }else{
      res.json({"result":false})
    }
  })
  .catch((error)=>res.json({"result":false,"message":error}))
})


router.get("/users/:id",(req,res)=>{
  const {id} = req.params
  userSchema
  .findById(id)
  .then((data)=>res.json(data))
  .catch((error)=>res.status(404).json({msg:'user not found'}))
})

router.delete("/users/:id",(req,res)=>{
  const {id} = req.params
  userSchema
  .remove({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>console.error(error))
})
module.exports = router;
