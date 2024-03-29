const express = require("express");
const router = express.Router();
const deviceSchema = require("../models/devices");

//add devices
router.post("/devices", (req, res) => {
  console.log(req.body);
  const device = deviceSchema(req.body);
  device
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});
router.get("/user/devices/:id",(req,res)=>{
  const {id} = req.params
  deviceSchema
  .find({"userID":id})
  .then((data)=>res.json(data))
  .catch((error)=>res.status(404).json({msg:'device not found'}))
})

router.get("/devices/:id",(req,res)=>{
  const {id} = req.params
  deviceSchema
  .findById(id)
  .then((data)=>res.json(data))
  .catch((error)=>res.status(404).json({msg:'device not found'}))
})

router.delete("/devices/:id",(req,res)=>{
  const {id} = req.params
  deviceSchema
  .remove({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.status(404).json({msg:'device not found'}))
})
module.exports = router;
