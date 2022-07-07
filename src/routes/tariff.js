const express = require("express");
const router = express.Router();
const tariffSchema = require("../models/tariff");

router.get("/tariff",(req,res)=>{
    tariffSchema
    .find()
    .then((data)=>res.json(data[0]))
    .catch((error)=>console.error(error))
})

router.post("/tariff", (req, res) => {
    const user = tariffSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((e) => res.json({ message: e }));
});

router.put("/tariff",(req,res)=>{
    const {body} =  req
    tariffSchema.updateOne(
        {_id:body._id},
        {$set:{
            cost:body.cost
        }},
        function (error,info) {
            if (error) {
                res.json({
                    result: false,
                    msg: 'No se pudo modificar el cliente',
                    err
                });
            } else {
                res.json({
                    result: true,
                    info: info,
                    data:body
                })
            }
        }
    )
})
module.exports = router;